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
import { HttpClient } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
/**
 * Generated class for the CreateIssuePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateIssuePage = /** @class */ (function () {
    function CreateIssuePage(auth, http, navCtrl, navParams, geolocation, camera) {
        this.auth = auth;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.camera = camera;
    }
    CreateIssuePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateIssuePage');
        // TODO: make an HTTP request to retrieve the issue types.
        var url = 'https://comem-citizen-engagement.herokuapp.com/api/issueTypes';
        this.http.get(url).subscribe(function (issueTypes) {
            console.log("Issue types loaded", issueTypes);
        });
        // getting the user location
        var geolocationPromise = this.geolocation.getCurrentPosition();
        geolocationPromise.then(function (position) {
            var coords = position.coords;
            console.log("User is at " + coords.longitude + ", " + coords.latitude);
        }).catch(function (err) {
            console.warn("Could not retrieve user position because: " + err.message);
        });
    };
    CreateIssuePage.prototype.takePicture = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (pictureData) {
            _this.pictureData = pictureData;
        }).catch(function (err) {
            console.warn("Could not take picture because: " + err.message);
        });
    };
    CreateIssuePage.prototype.logOut = function () {
        this.auth.logOut();
    };
    CreateIssuePage = __decorate([
        Component({
            selector: 'page-create-issue',
            templateUrl: 'create-issue.html',
        }),
        __metadata("design:paramtypes", [AuthProvider, HttpClient, NavController, NavParams, Geolocation, Camera])
    ], CreateIssuePage);
    return CreateIssuePage;
}());
export { CreateIssuePage };
//# sourceMappingURL=create-issue.js.map