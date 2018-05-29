/**
 * Created by dattaram on 29/5/18.
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./components/login.component";

const routeConst: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  }, {
    path: 'login', component: LoginComponent
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routeConst)],
  exports: [RouterModule],
  providers: [],
})
export class RouteConfigModule {
}
