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
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { config } from '../../app/config';
/*
  Generated class for the GeIssueListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GeIssueListProvider = /** @class */ (function () {
    function GeIssueListProvider(http) {
        this.http = http;
        console.log('Hello GeIssueListProvider Provider');
    }
    GeIssueListProvider.prototype.getIssues = function () {
        var issuesUrl = config.apiUrl + "/issues";
        return this.http.get(issuesUrl);
    };
    GeIssueListProvider.prototype.getIssuesById = function (issueId) {
        var issueUrl = config.apiUrl + "/issues/" + issueId;
        //Create new HttpParams
        /*
        let params = new HttpParams();
        if (include) {
          include.forEach((item) => {
            params = params.append('include', item);
          });
        }
  
        const httpOptions = {
          params: params,
        };
        */
        return this.http.get(issueUrl);
    };
    GeIssueListProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], GeIssueListProvider);
    return GeIssueListProvider;
}());
export { GeIssueListProvider };
//# sourceMappingURL=ge-issue-list.js.map