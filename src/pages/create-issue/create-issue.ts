import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { NavController, NavParams } from 'ionic-angular';

import { GeIssueListProvider } from '../../providers/ge-issue-list/ge-issue-list';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';
import { config } from '../../app/config';
import {Issue} from '../../models/issue';
import {NewIssue} from '../../models/new-issue';
import {IssueType} from '../../models/issue-type';
import { QimgImage } from '../../models/qimg-image';
import { PictureProvider } from '../../providers/picture/picture';
import { DetailsPage } from '../details/details';



/**
 * Generated class for the CreateIssuePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-create-issue',
  templateUrl: 'create-issue.html',
})

export class CreateIssuePage {

  newIssue: NewIssue;
  issueTypes: IssueType[];
  picture: QimgImage;

  constructor(
    private auth: AuthProvider,
    public http: HttpClient,
    public navCtrl: NavController,
    public navParams: NavParams,
    private issueProvider : GeIssueListProvider,
    private pictureProvider: PictureProvider,
    private geolocation: Geolocation,
    private camera: Camera) {

    this.newIssue = {
      location: {
        coordinates: [0, 0],
        type: "Point"
      },
      description: '',
      tags: [],
      imageUrl: '',
      issueTypeHref:''
    };
  }

  ionViewDidLoad() {
    this.issueProvider.getIssueTypes().subscribe(issueTypes => {
      this.issueTypes = issueTypes;
    });


    // getting the user location
    const geolocationPromise = this.geolocation.getCurrentPosition();
    geolocationPromise.then(position => {
      const coords = position.coords;
      this.newIssue.location.coordinates[1]=position.coords.latitude;
      this.newIssue.location.coordinates[0]=position.coords.longitude;
      console.log(`new issue is at ${coords.longitude}, ${coords.latitude}`);
    }).catch(err => {
      console.warn(`Could not retrieve user position because: ${err.message}`);
    });
  }

  takePicture() {
    this.pictureProvider.takeAndUploadPicture().subscribe(picture => {
      this.picture = picture;
    }, err => {
      console.warn('Could not take picture', err);
    });
  }

  createIssue(form: NgForm) {
    if (form.valid) {
      this.issueProvider.createIssue(this.newIssue).subscribe(newIssue => {
        this.navCtrl.push(DetailsPage, {
          id: newIssue.id
        });
      }, err => {
        console.warn('Could not create the new issue', err);
      });
    }
  }

  logOut() {
    this.auth.logOut();
  }

}
