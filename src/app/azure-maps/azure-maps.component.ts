
import { Component, OnInit } from '@angular/core';
import * as atlas from 'azure-maps-control';

@Component({
  selector: 'app-azure-maps',
  templateUrl: './azure-maps.component.html',
  styleUrls: ['./azure-maps.component.css']
})
export class AzureMapsComponent implements OnInit {

  constructor() { }

  createMap() {
    var map = new atlas.Map('myMap', {
      language: 'en-US',
      view: 'Auto',
      showBuildingModels: true,
      showLogo: false,
      style: "road",
      zoom: 11,
      center: new atlas.data.Position(6.7735, 51.2277),
      authOptions: {
        authType: atlas.AuthenticationType.subscriptionKey,
        subscriptionKey: '<key here>'
      }
    });
  }

  ngOnInit(): void {
    this.createMap();
  }

}
