import { Component, OnInit, OnDestroy } from '@angular/core';
 declare const $:any

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})
export class InterviewComponent implements OnInit ,OnDestroy{

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
  public deleteCss(url : string) {
  	$("[href*='"+url+"']").remove()
  }

  constructor() {
this.css('../../../../assets/interview/assets/css/line-awesome.min.css')
this.css('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700')
this.css('../../../../assets/interview/assets/main.css')
this.css('../../../../assets/interview/assets/css/font-awesome.min.css')
this.css('../../../../assets/interview/assets/css/bootstrap.min.css')
this.css('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700')

this.loadScript('https://kit.fontawesome.com/d8083af4d6.js')


   }

  ngOnInit() {
    this.deleteCss('./assets/css/plugins.css')

    const hdConstraints = {
      video: {width: {min: 1280}, height: {min: 720}}
    };
                navigator.getUserMedia = navigator.getUserMedia 
                navigator.getUserMedia(hdConstraints, function(stream){
                    var video = document.getElementById('vidDisplay');
                    var mycam = document.getElementById('vidDisplay2');
                      video.srcObject = stream
                      mycam.srcObject=stream
                      
                                        }, function(err) {
                                         console.log("The following error occurred: " + err.name);
                                      })
                                      
                                      


    
  }
  ngOnDestroy(){
    this.css('../../../../assets/css/plugins.css')
  }

}
