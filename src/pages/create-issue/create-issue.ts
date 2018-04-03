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
  pictureData: string;

  constructor(
    private auth: AuthProvider,
    public http: HttpClient,
    public navCtrl: NavController,
    public navParams: NavParams,
    private issueProvider : GeIssueListProvider,
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
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options).then(pictureData => {
      this.pictureData = pictureData;
    }).catch(err => {
      console.warn(`Could not take picture because: ${err.message}`);
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
