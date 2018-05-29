/**
 * Created by dattaram on 29/5/18.
 */
import {NgModule} from '@angular/core';
import {AmexioWidgetModule} from "amexio-ng-extensions";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [],
  providers: [],
  imports: [AmexioWidgetModule, FormsModule],
  exports: [AmexioWidgetModule, FormsModule]
})
export class SharedModule {

}
