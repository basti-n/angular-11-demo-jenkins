import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './info-routing.module';
import { InfoComponent } from './info.component';

@NgModule({
  imports: [CommonModule, AppRoutingModule],
  exports: [InfoComponent],
  declarations: [InfoComponent],
  providers: [],
})
export class InfoModule {}
