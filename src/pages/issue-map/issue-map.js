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
import { NavController, NavParams } from 'ionic-angular';
import { marker, tileLayer } from 'leaflet';
/**
 * Generated class for the IssueMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IssueMapPage = /** @class */ (function () {
    function IssueMapPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // construction de la carte
        var tileLayerUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        var tileLayerOptions = { maxZoom: 18 };
        this.mapOptions = {
            layers: [
                tileLayer(tileLayerUrl, tileLayerOptions)
            ]
        };
        // Création des markers
        this.mapMarkers = [
            marker([46.778186, 6.641524]).bindTooltip('Hello'),
            marker([46.780796, 6.647395]).bindTooltip('Crétin'),
            marker([46.784992, 6.652267]).bindTooltip('Ici')
        ];
    }
    IssueMapPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IssueMapPage');
    };
    IssueMapPage.prototype.onMapReady = function (map) {
        var _this = this;
        this.map = map;
        this.map.locate({ setView: true, maxZoom: 15 }); // centre la carte sur la location du user
        this.map.on('moveend', function () {
            var center = _this.map.getCenter();
            console.log("Map moved to " + center.lng + ", " + center.lat);
        });
    };
    IssueMapPage = __decorate([
        Component({
            selector: 'page-issue-map',
            templateUrl: 'issue-map.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], IssueMapPage);
    return IssueMapPage;
}());
export { IssueMapPage };
//# sourceMappingURL=issue-map.js.map