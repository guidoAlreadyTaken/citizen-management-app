var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, Injector } from '@angular/core';
import { first, switchMap } from 'rxjs/operators';
import { AuthProvider } from '../auth/auth';
var AuthInterceptorProvider = /** @class */ (function () {
    function AuthInterceptorProvider(injector) {
        this.injector = injector;
    }
    AuthInterceptorProvider.prototype.intercept = function (req, next) {
        // Retrieve AuthProvider at runtime from the injector.
        // (Otherwise there would be a circular dependency:
        //  AuthInterceptorProvider -> AuthProvider -> HttpClient -> AuthInterceptorProvider).
        var auth = this.injector.get(AuthProvider);
        // Get the bearer token (if any).
        return auth.getToken().pipe(first(), switchMap(function (token) {
            // Add it to the request if it doesn't already have an Authorization header.
            if (token && !req.headers.has('Authorization')) {
                req = req.clone({
                    headers: req.headers.set('Authorization', "Bearer " + token)
                });
            }
            return next.handle(req);
        }));
    };
    AuthInterceptorProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Injector])
    ], AuthInterceptorProvider);
    return AuthInterceptorProvider;
}());
export { AuthInterceptorProvider };
//# sourceMappingURL=auth-interceptor.js.map