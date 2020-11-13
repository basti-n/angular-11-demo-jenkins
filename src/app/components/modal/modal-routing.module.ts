import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ModalComponent } from './modal.component';

const routes: Routes = [{
  path: 'modal',
  component: ModalComponent
}, {
  path: '',
  redirectTo: 'modal',
  pathMatch: 'full'
}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ModalRoutingModule { }
