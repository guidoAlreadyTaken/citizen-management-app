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
import { NavController, NavParams } from 'ionic-angular';
import { NewUser } from '../../models/new-user';
import { LoginPage } from '../login/login';
import { RegProvider } from '../../providers/reg/reg';
/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignInPage = /** @class */ (function () {
    function SignInPage(reg, navCtrl, navParams) {
        this.reg = reg;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // craétion du modéle du new user
        this.newUser = new NewUser;
    }
    SignInPage.prototype.onSubmit = function ($event) {
        var _this = this;
        // Prevent default HTML form behavior.
        $event.preventDefault();
        // Do not do anything if the form is invalid.
        if (this.registerForm.invalid) {
            return console.log('Pas valide le form');
            ;
        }
        this.subscribeError = false;
        // set the role of the new user 
        this.newUser.roles = ['citizen'];
        // Create new user
        this.reg.createUser(this.newUser).subscribe(function (user) {
            _this.navCtrl.push(LoginPage, {
                info: "Utilisateur créé avec succès."
            });
        }, function (err) {
            _this.subscribeError = true;
        });
    };
    SignInPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignInPage');
    };
    __decorate([
        ViewChild(NgForm),
        __metadata("design:type", NgForm)
    ], SignInPage.prototype, "registerForm", void 0);
    SignInPage = __decorate([
        Component({
            selector: 'page-sign-in',
            templateUrl: 'sign-in.html',
        }),
        __metadata("design:paramtypes", [RegProvider, NavController, NavParams])
    ], SignInPage);
    return SignInPage;
}());
export { SignInPage };
//# sourceMappingURL=sign-in.js.map