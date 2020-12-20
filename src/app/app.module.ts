import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DynamicSelectorComponent } from './components/dynamic-selector/dynamic-selector.component';

@NgModule({
  declarations: [AppComponent, DynamicSelectorComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
