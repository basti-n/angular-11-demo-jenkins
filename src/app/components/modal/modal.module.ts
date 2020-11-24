import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { ModalRoutingModule } from './modal-routing.module';

@NgModule({
  declarations: [ModalComponent],
  exports: [ModalComponent],
  imports: [CommonModule, ModalRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ModalModule {}
