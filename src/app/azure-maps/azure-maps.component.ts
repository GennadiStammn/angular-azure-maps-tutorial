
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
            subscriptionKey: 'm4p6IZitk0R3wAH9abK4ZPmgphFrZLzCcRZoVMeEd0k'
        }
    });
}

  ngOnInit(): void {
    this.createMap();
  }

}
