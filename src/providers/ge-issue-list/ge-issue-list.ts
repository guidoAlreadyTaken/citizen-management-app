import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http ,Response } from '@angular/http';
import { ReplaySubject } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { delayWhen, map } from 'rxjs/operators';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IssueComment } from '../../models/issue-comments';
import {Issue} from '../../models/issue';
import {NewIssue} from '../../models/new-issue';
import {IssueType} from '../../models/issue-type';
import { config } from '../../app/config';


/*
  Generated class for the GeIssueListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/



@Injectable()
export class GeIssueListProvider {


	constructor(public http: HttpClient) {
    	console.log('Hello GeIssueListProvider Provider');
  	}

  	getIssues(): Observable<Issue> {
      const issuesUrl = `${config.apiUrl}/issues`;
  		return this.http.get<Issue>(issuesUrl);
  	}

    getIssuesById(issueId: string): Observable<Issue> {

      const issueUrl = `${config.apiUrl}/issues/${issueId}`;

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

      return this.http.get<Issue>(issueUrl);

    }

    createIssue(newIssue: NewIssue): Observable<Issue> {
      const newIssueUrl = `${config.apiUrl}/issues`;
      return this.http.post<Issue>(newIssueUrl, newIssue);
    }

    getIssueTypes(page?: number, pageSize?: number): Observable<IssueType[]> {
      const issueTypesUrl = `${config.apiUrl}/issueTypes`;

      //Create new HttpParams
      let params = new HttpParams();
      params = page ? params.append('page', page.toString()) : params;
      params = pageSize ? params.append('pageSize', pageSize.toString()) : params;
      
      const httpOptions = {
        params: params,
      };

      return this.http.get<IssueType[]>(issueTypesUrl, httpOptions).pipe(
        map(issueTypes => {
          console.log(issueTypes);
          return issueTypes;
        })
      );
    }

  createIssueComment(issueId: string, newComment: IssueComment): Observable<IssueComment> {
    const newIssueCommentUrl = `${config.apiUrl}/issues/${issueId}/comments`;

    return this.http.post<IssueComment>(newIssueCommentUrl, newComment);
  }

  getIssueCommentsById(id: string): Observable<IssueComment[]> {
    const issueCommentsUrl = `${config.apiUrl}/issues/${id}/comments?include=author`;

    return this.http.get<IssueComment[]>(issueCommentsUrl);
  }


}


