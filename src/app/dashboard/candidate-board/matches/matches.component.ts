import { Component, OnInit } from '@angular/core';
declare const $:any

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css'
,'../../../../assets/dashboard/css/argon.css']
})
export class MatchesComponent implements OnInit {
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
  
}

}

