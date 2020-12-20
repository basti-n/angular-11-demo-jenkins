import {
  Compiler,
  ComponentRef,
  Injectable,
  Injector,
  NgModuleFactory,
} from '@angular/core';
import { BaseModule } from './base.module';

@Injectable({ providedIn: 'root' })
export class DynamicComponentService {
  constructor(private injector: Injector) {}

  public getComponentBySelector(
    selector: string,
    moduleLoaderFn: () => Promise<unknown>
  ): Promise<ComponentRef<unknown> | undefined> {
    return this.getModuleFactory(moduleLoaderFn).then((moduleFactory) => {
      const module = moduleFactory.create(this.injector);

      if (module.instance instanceof BaseModule) {
        const componentFactory = module.instance.getComponentFactory(selector);
        return componentFactory?.create(this.injector, [], null, module);
      } else {
        throw Error(
          'Module should extend BaseModule to use "string" based component selector'
        );
      }
    });
  }

  private async getModuleFactory(
    moduleLoaderFn: () => Promise<any>
  ): Promise<NgModuleFactory<unknown>> {
    const ngModuleOrNgModuleFactory = await moduleLoaderFn();

    let moduleFactory;

    if (ngModuleOrNgModuleFactory instanceof NgModuleFactory) {
      // AOT
      moduleFactory = ngModuleOrNgModuleFactory;
    } else {
      // JIT
      moduleFactory = this.injector
        .get(Compiler)
        .compileModuleAsync(ngModuleOrNgModuleFactory);
    }

    return moduleFactory;
  }
}
