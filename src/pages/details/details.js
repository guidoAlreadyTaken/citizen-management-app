var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GeIssueListProvider } from '../../providers/ge-issue-list/ge-issue-list';
import { AuthProvider } from '../../providers/auth/auth';
/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailsPage = /** @class */ (function () {
    function DetailsPage(navCtrl, navParams, IssueProvider, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.IssueProvider = IssueProvider;
        this.auth = auth;
    }
    DetailsPage.prototype.ionViewDidLoad = function () {
        this.loadIssueDetails(this.navParams.data.id);
    };
    DetailsPage.prototype.loadIssueDetails = function (issueId) {
        var _this = this;
        this.IssueProvider.getIssuesById(issueId).subscribe(function (issue) { _this.issue = issue; });
    };
    DetailsPage = __decorate([
        Component({
            selector: 'page-details',
            templateUrl: 'details.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            GeIssueListProvider,
            AuthProvider])
    ], DetailsPage);
    return DetailsPage;
}());
export { DetailsPage };
//# sourceMappingURL=details.js.map