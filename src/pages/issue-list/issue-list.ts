import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';
import { DetailsPage } from '../details/details';
import { GeIssueListProvider } from '../../providers/ge-issue-list/ge-issue-list';
import {Issue} from '../../models/issue';

/**
 * Generated class for the IssueListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-issue-list',
  templateUrl: 'issue-list.html',
})
export class IssueListPage {

  page : number;
  totalPage: number;
  issues: Issue[];

  constructor(
    private auth: AuthProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    private geIssueListProvider : GeIssueListProvider) 
  {
      this.getIssues();
  }

  goToDetails(issueId: string) {
    // constructeur de l'url pour rediriger l'utilisateur sur la page de l'isseue en question
    //var issueDetailsLink : string = 'https://comem-citizen-engagement.herokuapp.com/api/issues/'+ issueId; 
  	this.navCtrl.push(DetailsPage, {id: issueId});

  }

  
  getIssues() {
      this.geIssueListProvider.getIssues().subscribe(issues => { 
        this.issues = issues;
        console.log(this.issues);
      });
  }

  logOut() {
    this.auth.logOut();
  }


}
