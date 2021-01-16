import { Component } from '@angular/core';
import * as atlas from 'azure-maps-control';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-azure-maps-tutorial';

  mapClick(event: atlas.MapMouseEvent) {
    console.log(event.position)
  }
}
