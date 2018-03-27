import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { GeIssueListProvider } from '../../providers/ge-issue-list/ge-issue-list';
import {Issue} from '../../models/issue';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

	issue: Issue;

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	private IssueProvider : GeIssueListProvider,
  	private auth: AuthProvider,) {
  }

  ionViewDidLoad() {
    this.loadIssueDetails(this.navParams.data.id);
  }

  loadIssueDetails(issueId: string) {
  	this.IssueProvider.getIssuesById(issueId).subscribe(issue=> {this.issue = issue});
  }
}
