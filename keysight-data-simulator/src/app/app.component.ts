import { Component } from '@angular/core';

declare function greet(): void;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title : string = 'Keysight Data Simulator';

  // Using CDNs
  // myScriptElement: HTMLScriptElement;
  constructor() {
    greet();
    // this.myScriptElement = document.createElement("script");
    // this.myScriptElement.src = "...";
    // document.body.appendChild(this.myScriptElement);
  }
}