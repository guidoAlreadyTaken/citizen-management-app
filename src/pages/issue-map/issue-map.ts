import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { latLng, Map, MapOptions, marker, Marker, tileLayer } from 'leaflet';

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
  map: Map;
  mapOptions: MapOptions;
  mapMarkers: Marker[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  	// construction de la carte
    const tileLayerUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const tileLayerOptions = { maxZoom: 18 };
    this.mapOptions = {
      layers: [
        tileLayer(tileLayerUrl, tileLayerOptions)
      ]

    };

    // Création des markers
    this.mapMarkers = [
    	marker([ 46.778186, 6.641524 ]).bindTooltip('Hello'),
      	marker([ 46.780796, 6.647395 ]).bindTooltip('Crétin'),
      	marker([ 46.784992, 6.652267 ]).bindTooltip('Ici')
    ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IssueMapPage');
  }

  onMapReady(map: Map) {
    this.map = map;
    this.map.locate({setView: true, maxZoom: 15}); // centre la carte sur la location du user
    this.map.on('moveend', () => {
    	const center = this.map.getCenter();
    	console.log(`Map moved to ${center.lng}, ${center.lat}`);
    });

   }


}
