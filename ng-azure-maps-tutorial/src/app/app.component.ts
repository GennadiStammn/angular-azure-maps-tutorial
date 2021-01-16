import { Component } from '@angular/core';
import * as atlas from 'azure-maps-control';
import { IMapEvent, SearchService } from 'ng-azure-maps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-azure-maps-tutorial';

  constructor(private readonly searchService: SearchService) {
  }

  mapClick(event: atlas.MapMouseEvent) {
    console.log(event.position)
  }

  mapReady(event: IMapEvent) {

    this.searchService
      .searchAddress("berlin", { countrySet: ['de', 'us'] })
      .subscribe(response => {
        const features = [];
        for (const result of response.results) {
          event.map.markers.add(new atlas.HtmlMarker({
            position: [result.position.lon, result.position.lat]
          }));
          features.push(new atlas.data.Point([result.position.lon, result.position.lat]));
        }

        event.map.setCamera({
          bounds: atlas.data.BoundingBox.fromData(features)
        });
      });;
  }
}
