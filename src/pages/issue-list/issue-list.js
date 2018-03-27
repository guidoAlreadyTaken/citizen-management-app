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
import { DetailsPage } from '../details/details';
import { GeIssueListProvider } from '../../providers/ge-issue-list/ge-issue-list';
/**
 * Generated class for the IssueListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IssueListPage = /** @class */ (function () {
    function IssueListPage(navCtrl, navParams, geIssueListProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geIssueListProvider = geIssueListProvider;
        this.getIssues();
    }
    IssueListPage.prototype.goToDetails = function (issueId) {
        // constructeur de l'url pour rediriger l'utilisateur sur la page de l'isseue en question
        //var issueDetailsLink : string = 'https://comem-citizen-engagement.herokuapp.com/api/issues/'+ issueId; 
        this.navCtrl.push(DetailsPage, { id: issueId });
    };
    IssueListPage.prototype.getIssues = function () {
        var _this = this;
        this.geIssueListProvider.getIssues().subscribe(function (issues) {
            _this.issues = issues;
            console.log(_this.issues);
        });
    };
    IssueListPage = __decorate([
        Component({
            selector: 'page-issue-list',
            templateUrl: 'issue-list.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, GeIssueListProvider])
    ], IssueListPage);
    return IssueListPage;
}());
export { IssueListPage };
//# sourceMappingURL=issue-list.js.map