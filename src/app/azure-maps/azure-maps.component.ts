
import { Component, OnInit } from '@angular/core';

declare namespace atlas {
  class Map {
      constructor(a?,b?)
  }
}

@Component({
  selector: 'app-azure-maps',
  templateUrl: './azure-maps.component.html',
  styleUrls: ['./azure-maps.component.css']
})
export class AzureMapsComponent implements OnInit {

  loadAPI: Promise<any>;

  constructor() {
    this.loadAPI = new Promise((resolve) => {
      console.log('resolving promise...');
      this.loadScript();
    });
  }


  public loadScript() {
    console.log('preparing to load...')

    // let style = document.createElement('link');
    // style.rel = "stylesheet"
    // style.href = "https://atlas.microsoft.com/sdk/javascript/mapcontrol/2/atlas.min.css"
    // style.type = "text/css"
    // document.getElementsByTagName('head')[0].appendChild(style);

    // let script1 = document.createElement('script');
    // script1.src = "https://atlas.microsoft.com/sdk/javascript/mapcontrol/2/atlas.min.js"
    // document.getElementsByTagName('head')[0].appendChild(script1);

    // let script2 = document.createElement('script');
    // script2.src = "https://atlas.microsoft.com/sdk/javascript/service/2/atlas-service.min.js"
    // document.getElementsByTagName('head')[0].appendChild(script2);
  }

  GetMap() {
    //Add Map Control JavaScript code here.
    //Instantiate a map object
    var map = new atlas.Map("myMap", {
        //Add your Azure Maps subscription key to the map SDK. Get an Azure Maps key at https://azure.com/maps
        authOptions: {
            authType: 'subscriptionKey',
            subscriptionKey: '<Your Azure Maps Key>'
        }
    });
}

  ngOnInit(): void {
    this.GetMap();
  }

}
