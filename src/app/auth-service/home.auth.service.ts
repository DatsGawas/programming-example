/**
 * Created by dattaram on 29/5/18.
 */
import {Injectable} from '@angular/core';
import {CanLoad, Route, Router} from '@angular/router';
import {Observable} from "rxjs/Observable";
import {CookieService} from "ngx-cookie-service";

@Injectable()
export class HomeAuthService implements CanLoad {
  constructor(private _cookieService: CookieService, private _route: Router) {}
  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    if (this._cookieService.check('emailId') && this._cookieService.check('password')) {
      if (route.data[0] == this._cookieService.get('emailId') && route.data[1] == this._cookieService.get('password')) {
        return true;
      } else {
        this._route.navigate(['login']);
        return false;
      }
    }
  }
}
