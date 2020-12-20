import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicComponentComponent {
  @Input() text?: string;

  constructor() {}
}
