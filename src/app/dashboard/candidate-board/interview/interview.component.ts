import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
declare const $ :any
declare const Peer:any 

@Component({
  selector: 'app-candidate-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})
export class candidateInterviewComponent implements OnInit , OnDestroy{
  @ViewChild('comingCall', { static: true }) comingCall: any
  @ViewChild('goingCall', { static: true }) goingCall: any

  received :boolean 
  answered :boolean 
  peer
  callHandle : boolean

 
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


    let peer = new Peer('ali123');
    console.log(peer.id);
    

    this.deleteCss('./assets/css/plugins.css')


    let user = JSON.parse(sessionStorage.getItem('user'))
    let entrepriseID='hireme'+123456
    //  let conn = peer.connect('hireme999')
    // // on open will be launch when you successfully connect to PeerServer
    // conn.on('open', function(){
    //   // here you have conn.id
    //   conn.send('yo');
    // })
    
let received :boolean =false
let answered : boolean =false
let self = this

peer.on('call', function(call) {
  console.log("call coming");

self.received=true
self.answered=false
   var n = <any>navigator;

    n.getUserMedia = (n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia || n.msGetUserMedia);

let coming = self.comingCall.nativeElement
let going = self.goingCall.nativeElement

$( "#answer" ).click(function() {
  
  console.log('lenna');
  
 self.received=false
 self.answered=true

  n.getUserMedia({video: true}, function(stream) {
  call.answer(stream) 
  self.goingCall.nativeElement.srcObject=stream
  self.goingCall.nativeElement.play()
  call.on('stream', function(remoteStream) {
    // Show stream in some video/canvas element.
    self.comingCall.nativeElement.srcObject=remoteStream
    self.comingCall.nativeElement.play()
  });
}, function(err) {
  console.log('Failed to get local stream' ,err);
});
})

$( "#end" ).click(function() {
    self.received=false
    this.peer.dataConnection.close();
    
})
})









console.log(peer.connections);


this.received=received
this.answered=answered
this.peer=peer
    
  }
  ngOnDestroy(){
    this.css('../../../../assets/css/plugins.css')
  }

}
