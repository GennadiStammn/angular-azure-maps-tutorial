import { Component, OnInit } from '@angular/core';

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

  ngOnInit(): void {
  }

}
