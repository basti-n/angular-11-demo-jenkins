import {
  ChangeDetectionStrategy,
  Component,
  AfterContentChecked,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { DynamicComponentService } from './core/dynamic-component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  @ViewChild('container', { read: ViewContainerRef, static: true })
  container?: ViewContainerRef;

  inputs: { [key: string]: any } = { text: 'Hello Dear World' };
  selector = 'app-dynamic-component';
  loaderFn = () =>
    (import('./components/dynamic-component/dynamic-component.module').then(
      (m) => m.DynamicComponentModule)
    )

  constructor(private componentService: DynamicComponentService) {}

  createDynamicComponent(): void {
    this.componentService
      .getComponentBySelector(this.selector, this.loaderFn)
      .then((componentRef) => {
        if (componentRef) {
          this.container?.insert(componentRef.hostView);
        }
      });
  }
}
