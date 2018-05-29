/**
 * Created by dattaram on 29/5/18.
 */

import {Component, OnInit} from '@angular/core';
import {LoginModel} from "../models/login.model";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'login',
  template: `

    <amexio-row>
      <amexio-column [size]="3">

      </amexio-column>
      <amexio-column [size]="6">

        <amexio-card [header]="true"
                     [footer]="true"
                     [show]="true"
                     [footer-align]="'right'"
                     height="200">
          <amexio-header>
            Login
          </amexio-header>
          <amexio-body>
            <amexio-email-input [field-label]="'Email'"
                                [place-holder]="'Enter Email'"
                                [allow-blank]="false"
                                [error-msg] ="'Please Enter Email Id'"
                                [enable-popover]="true"
                                [(ngModel)]="loginModel.emailId"
                                [icon-feedback]="true">
            </amexio-email-input>
            <amexio-password-input [enable-popover]="true"
                                   [field-label]="'Password'"
                                   name ="password"
                                   [place-holder]="'Enter Password'"
                                   [error-msg] ="'Please Enter Password'"
                                   [(ngModel)]="loginModel.password"
                                   [allow-blank]="false"
                                   [icon-feedback]="true">
            </amexio-password-input>
          </amexio-body>
          <amexio-action>
            <amexio-button [label]="'Login'"
                           [type]="'theme-color'"
                           [tooltip]="'login'" (onClick)="onLoginClick()">
            </amexio-button>
          </amexio-action>
        </amexio-card>

       
      </amexio-column>

      <amexio-column [size]="3">

      </amexio-column>

    </amexio-row>


  `
})

export class LoginComponent implements OnInit {
  loginModel: LoginModel;
  constructor(private _route: Router, private _cookieService: CookieService) {
    this.loginModel = new LoginModel();
  }
  ngOnInit() {
  }

  onLoginClick() {
    if (this.loginModel.emailId != '' && this.loginModel.password != '') {
      this._cookieService.set('emailId', this.loginModel.emailId, 0.00138889);
      this._cookieService.set('password', this.loginModel.password, 0.00138889);
      this._route.navigate(['home']);
    }
  }
}
