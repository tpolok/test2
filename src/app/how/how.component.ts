import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how',
  templateUrl: './how.component.html',
  styleUrls: ['./how.component.css']
})
export class HowComponent implements OnInit {

  public solution = "platformBrowserDynamic().bootstrapModule(AppModule).then(() => {\n" +
  "  if ('serviceWorker' in navigator && environment.production) {\n" +
  "  navigator.serviceWorker.register('./ngsw-worker.js');\n" +
  "  }\n" +
  "  }).catch(err => console.log(err));";;
  constructor() { }

  ngOnInit() {
  }

}
