import {
  ChangeDetectionStrategy,
  Component,
  ComponentRef,
  Input,
  NgModuleFactory,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { DynamicComponentService } from 'src/app/core/dynamic-component.service';
import { isNullOrUndefined } from 'src/app/utils';

interface DynamicComponentInputs {
  [key: string]: any;
}

@Component({
  selector: 'app-dynamic-selector',
  template: '<ng-container #componentSlot></ng-container>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicSelectorComponent implements OnChanges, OnDestroy {
  @ViewChild('componentSlot', { read: ViewContainerRef, static: true })
  componentSlot!: ViewContainerRef;

  @Input()
  moduleLoaderFn!: () => Promise<NgModuleFactory<unknown>>;
  @Input() componentSelector!: string;
  @Input() inputs!: DynamicComponentInputs;

  public component!: ComponentRef<any>;

  constructor(
    private readonly dynamicComponentService: DynamicComponentService
  ) {}

  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    if (changes.componentSelector || changes.moduleLoaderFn) {
      await this.initComponent();
      this.setInput();
    } else if (changes.inputs) {
      this.setInput();
    }
  }
  ngOnDestroy(): void {
    this.destroyComponent();
  }

  private async initComponent(): Promise<void> {
    this.destroyComponent();

    this.component = (await this.getComponent()) as ComponentRef<any>;
    if (this.component) {
      this.renderComponent(this.component);
    }
  }

  private getComponent(): Promise<ComponentRef<unknown> | undefined> {
    return this.dynamicComponentService.getComponentBySelector(
      this.componentSelector,
      this.moduleLoaderFn
    );
  }

  private renderComponent(component: ComponentRef<unknown>): void {
    this.componentSlot.insert(component.hostView);
  }

  private setInput(): void {
    if (!isNullOrUndefined(this.component?.instance)) {
      Object.keys(this.inputs).forEach(
        (key) => (this.component.instance[key] = this.inputs[key])
      );
    }
    this.component.changeDetectorRef.detectChanges();
  }

  private destroyComponent(): void {
    this.component?.destroy();
    this.component = (null as unknown) as ComponentRef<any>;
  }
}
