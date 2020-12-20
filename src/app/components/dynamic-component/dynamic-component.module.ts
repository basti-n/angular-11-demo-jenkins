import { CommonModule } from '@angular/common';
import { ComponentFactoryResolver, NgModule } from '@angular/core';
import { BaseModule } from 'src/app/core/base.module';
import { DynamicComponentComponent } from './dynamic-component.component';

@NgModule({
  imports: [CommonModule],
  exports: [DynamicComponentComponent],
  declarations: [DynamicComponentComponent],
  providers: [],
})
export class DynamicComponentModule extends BaseModule {
  dynamicComponents = [DynamicComponentComponent];

  constructor(cfr: ComponentFactoryResolver) {
    super(cfr);
  }
}
