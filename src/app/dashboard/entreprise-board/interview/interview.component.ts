import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
declare const $: any
declare const Peer: any
@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})
export class InterviewComponent implements OnInit, OnDestroy {

  @ViewChild('comingCall', { static: true }) comingCall: any
  @ViewChild('goingCall', { static: true }) goingCall: any

  user
  peer
  connectedUsers: any[] = []
  calling: boolean = false
  answered:boolean =false

  calluser() {
    this.calling = true
    console.log(this.peer);

    let peer = this.peer
    let answered=this.answered
    let calling = this.calling


    let coming = this.comingCall.nativeElement
    let going = this.goingCall.nativeElement
    var n = <any>navigator;

    n.getUserMedia = (n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia || n.msGetUserMedia);


    n.getUserMedia({ video: true }, function (stream) {

     let call = peer.call("bttp0c9gx3900001", stream);

      
       call.on('stream', (remoteStream) => {
        answered=true
        calling=false
        
        going.srcObject = stream;
        going.play();
        
        coming.srcObject = remoteStream
        coming.play()
      })



    }, function (err) {
      console.log('Failed to get stream', err);
    })


  }




  public loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
  public css(url: string) {
    const body = <HTMLDivElement>document.body;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = url;
    body.appendChild(link);

  }
  public deleteCss(url: string) {
    $("[href*='" + url + "']").remove()
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
    console.log(this.comingCall);
    
    this.deleteCss('./assets/css/plugins.css')

    let all_connected: any[] = []
    let user = JSON.parse(sessionStorage.getItem('user'))
    let peer = new Peer('hireme123456')
    peer.on('connection', (conection) => {
      conection.on('data', data => {
        all_connected.push(data)
        console.log(all_connected);
      })
    })





    this.peer = peer
    console.log(this.peer);
    
    this.user = user
    this.connectedUsers = all_connected
  }
  ngOnDestroy() {
    this.css('../../../../assets/css/plugins.css')
  }

}
