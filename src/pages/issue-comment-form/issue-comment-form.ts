import { Component, Input, ViewChild } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { NgForm } from '@angular/forms';


import { Issue } from '../../models/issue';
import { IssueComment } from '../../models/issue-comments';
import { GeIssueListProvider } from '../../providers/ge-issue-list/ge-issue-list';
/**
 * Generated class for the IssueCommentFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-issue-comment-form',
  templateUrl: 'issue-comment-form.html',
})
export class IssueCommentFormPage {

	@ViewChild(NgForm)
  	commentForm: NgForm;

  	@Input()
  	issue: Issue;

  	newComment: IssueComment;
  	subscribeError: boolean;

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	private issueProvider: GeIssueListProvider,
  	public events: Events
  ) {
  	this.newComment = new IssueComment();
  	this.subscribeError = false;
  }

  onCommentSubmit($event) {
    // Prevent default HTML form behavior.
    $event.preventDefault();

    // Do not do anything if the form is invalid.
    if (this.commentForm.invalid) {
      return;
    }

    this.subscribeError = false;

    this.issueProvider.createIssueComment(this.issue.id, this.newComment).subscribe(newComment => {
      this.events.publish('comment:created');
      this.commentForm.reset();
    }, err => {
      console.warn(`Could not create the comment: ${err.message}`);
    });
  }

}
