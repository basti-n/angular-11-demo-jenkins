import {
  ComponentFactory,
  ComponentFactoryResolver,
  Type,
} from '@angular/core';

export abstract class BaseModule {
  private selectorToFactoryMap: Map<
    string,
    ComponentFactory<any>
  > | null = null;

  protected abstract dynamicComponents: Type<any>[];

  constructor(protected cfr: ComponentFactoryResolver) {}

  public getComponentFactory(
    selector: string
  ): ComponentFactory<any> | undefined {
    if (!this.selectorToFactoryMap) {
      this.initRegistry();
    }

    return this.selectorToFactoryMap?.get(selector);
  }

  public initRegistry(): void {
    this.selectorToFactoryMap = new Map();
    this.dynamicComponents?.forEach((component) =>
      this.setComponentToRegistry(component)
    );
  }

  private setComponentToRegistry(componentType: Type<any>): void {
    const componentFactory = this.cfr.resolveComponentFactory(componentType);
    this.selectorToFactoryMap?.set(componentFactory.selector, componentFactory);
  }
}
