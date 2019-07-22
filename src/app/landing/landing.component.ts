import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

  constructor() { }

  ngOnInit() {

    // this.loadScript('../.././assets/js/core.min.js"');
    // this.loadScript('../.././assets/search/search.js');
    // this.loadScript('../.././assets/js/main.js');
  }






 }




