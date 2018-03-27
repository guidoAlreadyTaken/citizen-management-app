import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import {Http ,Response } from '@angular/http';
import { ReplaySubject } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { delayWhen, map } from 'rxjs/operators';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Issue} from '../../models/issue';
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

}


