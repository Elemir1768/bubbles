import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppBootstrapModule} from "./bootstrap.module";
import { ComponentList } from "./components/component-list"

@NgModule({
  declarations: [
    AppComponent,
    ComponentList
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
