/**
 * Created by dattaram on 29/5/18.
 */
import {NgModule} from '@angular/core';
import {AmexioWidgetModule} from "amexio-ng-extensions";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [],
  providers: [],
  imports: [AmexioWidgetModule, FormsModule, CommonModule],
  exports: [AmexioWidgetModule, FormsModule, CommonModule]
})
export class SharedModule {

}
