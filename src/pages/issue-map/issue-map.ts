
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { latLng, Map, MapOptions, marker, Marker, tileLayer } from 'leaflet';

import { AuthProvider } from '../../providers/auth/auth';
import { CreateIssuePage } from '../create-issue/create-issue';
import { GeIssueListProvider } from '../../providers/ge-issue-list/ge-issue-list';
import { Issue } from '../../models/issue';

/**
 * Generated class for the IssueMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-issue-map',
  templateUrl: 'issue-map.html',
})
export class IssueMapPage {

  issues: Issue[];
  map: Map;
  mapOptions: MapOptions;
  mapMarkers: Marker[];
  userMarker: Marker;

  constructor(
    private auth: AuthProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    private issueProvider: GeIssueListProvider,
    private geolocation: Geolocation,
    ) 
  {


    // Création des markers
    this.mapMarkers = [];


  }

  ionViewDidLoad() {
    this.loadIssues();
    // construction de la carte
    const tileLayerUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const tileLayerOptions = { maxZoom: 18 };
    this.mapOptions = {
      layers: [
        tileLayer(tileLayerUrl, tileLayerOptions)
      ],
      zoom: 15,

    };
  }


  private loadIssues() {
    this.issueProvider.getIssues().subscribe(issues => {
      this.issues = issues;
      issues.forEach((issue) => {
        this.mapMarkers.push(marker([issue.location.coordinates[1], issue.location.coordinates[0]]).bindTooltip(issue.description));
      });
    });
  }

  logOut() {
    this.auth.logOut();
  }

  onMapReady(map: Map) {
    this.map = map;
    this.map.locate({setView: true}); // centre la carte sur la location du user
    this.map.on('moveend', () => {
      const center = this.map.getCenter();
      console.log(`Map moved to ${center.lng}, ${center.lat}`);
    });

  }


}
