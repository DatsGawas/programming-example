/**
 * Created by dattaram on 29/5/18.
 */
import {NgModule} from '@angular/core';

import {HomeComponent} from "./home.component";
import {SharedModule} from "../shared-module/shared.module";
import {RouterModule, Routes} from "@angular/router";

const routeConst: Routes = [
  {
    path: '', component: HomeComponent, pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forChild(routeConst)],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule {
}
