import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {SharedModule} from "./shared-module/shared.module";
import {LoginComponent} from "./components/login.component";
import {RouteConfigModule} from "./route.config.module";
import {PageNotFoundComponent} from "./components/pagenotfound.component";


@NgModule({
  declarations: [
    AppComponent, LoginComponent, PageNotFoundComponent
  ],
  imports: [
    BrowserModule, SharedModule, RouteConfigModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
