import { Component, OnInit } from '@angular/core';
declare const $:any
@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  public css(url: string) {
    const body = <HTMLDivElement> document.body;
    const link = document.createElement('link');
    link.rel = 'stylesheet';    
    link.type = 'text/css'; 
    link.href = url; 
    body.appendChild(link);
    
  }
  constructor() { }

  ngOnInit() {
    this.css('../../assets/404.css')
  }

}
