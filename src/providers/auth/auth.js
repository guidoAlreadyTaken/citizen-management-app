var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable, ReplaySubject } from 'rxjs/Rx';
import { delayWhen, map } from 'rxjs/operators';
import { config } from '../../app/config';
/**
 * Authentication service for login/logout.
 */
var AuthProvider = /** @class */ (function () {
    function AuthProvider(http, storage) {
        var _this = this;
        this.http = http;
        this.storage = storage;
        this.authSource = new ReplaySubject(1);
        this.auth$ = this.authSource.asObservable();
        // TODO: load the stored authentication response from storage when the app starts.
        this.storage.get('auth').then(function (auth) {
            // Push the loaded value into the observable stream.
            _this.authSource.next(auth);
        });
    }
    AuthProvider.prototype.isAuthenticated = function () {
        return this.auth$.pipe(map(function (auth) { return !!auth; }));
    };
    AuthProvider.prototype.getUser = function () {
        return this.auth$.pipe(map(function (auth) { return auth ? auth.user : undefined; }));
    };
    AuthProvider.prototype.getToken = function () {
        return this.auth$.pipe(map(function (auth) { return auth ? auth.token : undefined; }));
    };
    AuthProvider.prototype.logIn = function (authRequest) {
        var _this = this;
        var authUrl = config.apiUrl + "/auth";
        return this.http.post(authUrl, authRequest).pipe(
        // TODO: delay the observable stream while persisting the authentication response.
        delayWhen(function (auth) {
            return _this.saveAuth(auth);
        }), map(function (auth) {
            _this.authSource.next(auth);
            console.log("User " + auth.user.name + " logged in");
            return auth.user;
        }));
    };
    AuthProvider.prototype.logOut = function () {
        this.authSource.next(null);
        // TODO: remove the stored authentication response from storage when logging out.
        this.storage.remove('auth');
        console.log('User logged out');
    };
    AuthProvider.prototype.saveAuth = function (auth) {
        return Observable.fromPromise(this.storage.set('auth', auth));
    };
    AuthProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient, Storage])
    ], AuthProvider);
    return AuthProvider;
}());
export { AuthProvider };
//# sourceMappingURL=auth.js.map