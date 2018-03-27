import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Storage } from '@ionic/storage';
import { Observable, ReplaySubject } from 'rxjs/Rx';
import { delayWhen, map } from 'rxjs/operators';

import { config } from '../../app/config';
import { UserRegister } from '../../models/user-register';
import { User } from '../../models/user';
import { NewUser } from '../../models/new-user';

/*
  Generated class for the RegProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RegProvider {

  constructor(public http: HttpClient) {
  }

  createUser(user: NewUser): Observable<User> {

  	const regUrl = `${config.apiUrl}/users`;
    return this.http.post<User>(regUrl, user);
  }

}
