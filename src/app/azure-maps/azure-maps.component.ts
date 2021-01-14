
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
    var map = new atlas.Map("myMap", {
        authOptions: {
            authType: atlas.AuthenticationType.subscriptionKey,
            subscriptionKey: '<Your Azure Maps Key>'
        }
    });
}

  ngOnInit(): void {
    this.createMap();
  }

}
