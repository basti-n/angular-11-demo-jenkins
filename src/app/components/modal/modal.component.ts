import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent {
  constructor(private router: Router) {}

  public close(): void {
    this.router.navigate([{ outlets: { modal: null } }]);
  }

  onSelection(event: unknown): void {
    console.log('Tab Container Changed', event);
  }
}
