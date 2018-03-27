var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { AuthRequest } from '../../models/auth-request';
import { AuthProvider } from '../../providers/auth/auth';
import { SignInPage } from '../sign-in/sign-in';
/**
 * Login page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(auth, navCtrl) {
        this.auth = auth;
        this.navCtrl = navCtrl;
        this.authRequest = new AuthRequest();
    }
    /**
     * Called when the login form is submitted.
     */
    LoginPage.prototype.onSubmit = function ($event) {
        var _this = this;
        // Prevent default HTML form behavior.
        $event.preventDefault();
        // Do not do anything if the form is invalid.
        if (this.form.invalid) {
            return;
        }
        // Hide any previous login error.
        this.loginError = false;
        // Perform the authentication request to the API.
        this.auth.logIn(this.authRequest).subscribe(undefined, function (err) {
            _this.loginError = true;
            console.warn("Authentication failed: " + err.message);
        });
    };
    LoginPage.prototype.goToSignIn = function () {
        this.navCtrl.push(SignInPage);
    };
    __decorate([
        ViewChild(NgForm),
        __metadata("design:type", NgForm)
    ], LoginPage.prototype, "form", void 0);
    LoginPage = __decorate([
        Component({
            templateUrl: 'login.html'
        }),
        __metadata("design:paramtypes", [AuthProvider, NavController])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.js.map