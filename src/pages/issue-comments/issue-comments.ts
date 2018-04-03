import { Component, Input } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';

import { Issue } from '../../models/issue';
import { GeIssueListProvider } from '../../providers/ge-issue-list/ge-issue-list';
import { IssueComment } from '../../models/issue-comments';

/**
 * Generated class for the IssueCommentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-issue-comments',
  templateUrl: 'issue-comments.html',
})
export class IssueCommentsPage {

	@Input()
	issue: Issue;
	comments: IssueComment[];

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	private issueProvider: GeIssueListProvider,
  	public events: Events

  ) {
   	events.subscribe('comment:created', () => {
      this.loadIssueComments();
    });
  }

  ngOnInit() {
  	this.loadIssueComments();
  }

  private loadIssueComments() {
    this.issueProvider.getIssueCommentsById(this.issue.id).subscribe(issueComments => {
      this.comments = issueComments.reverse();
    });
  }
}
