import { Component, OnInit } from '@angular/core';
declare const $ :any


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css',
              '../../../../assets/dashboard/css/argon.css',
              '../../../../assets/dashboard/css/tag.css']
})
export class ProfileComponent implements OnInit {
  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
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
    this.loadScript('https://bootstrap-tagsinput.github.io/bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js')
    this.loadScript('../../../../assets/dashboard/js/candidateprofile.js')
    this.css('../../../../assets/dashboard/css/tag.css')
  }

}



