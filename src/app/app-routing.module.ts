import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddQueryParamGuard } from './guards/add-query-param.guard';

const routes: Routes = [{
  path: 'modal',
  outlet: 'modal',
  loadChildren: () => import('./components/modal/modal.module').then(m => m.ModalModule)
}, {
  path: '',
  pathMatch: 'full',
  component: AppComponent,
  canActivate: [AddQueryParamGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
