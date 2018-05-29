import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {SharedModule} from "./shared-module/shared.module";
import {LoginComponent} from "./components/login.component";
import {RouteConfigModule} from "./route.config.module";


@NgModule({
  declarations: [
    AppComponent, LoginComponent
  ],
  imports: [
    BrowserModule, SharedModule, RouteConfigModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
