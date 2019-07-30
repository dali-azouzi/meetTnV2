import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CandidateService } from 'src/app/services/candidate.service';

declare const $ :any


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css',
              '../../../../assets/dashboard/css/argon.css',
              '../../../../assets/dashboard/css/tag.css']
})
export class ProfileComponent implements OnInit {
  user
  skills:string;
  profileForm

  userPdf
  userimage


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

  PDFupload(event){

    let selectedpdf = event.target.files[0]
    const fb =  new FormData()
    fb.append('file',selectedpdf)
    this.service.uploadPdf(fb ,this.user.id).subscribe(
      (data:any)=>{
        this.userPdf=data.url
        console.log(data);
        
      }
    )
  


   


  }

  imageupload(event){
    let image:any
    let fileList: FileList = event.target.files;
    let selectedimage = event.target.files[0]
    const fb =  new FormData()
    fb.append('file',selectedimage)
    this.service.uploadImage(fb ,this.user.id).subscribe(
      (data:any)=>{
        console.log(data);
        
        this.userimage=data.url
        
      }
    )



   


  }

  update(){
    
   if(this.userPdf==null){
    this.userPdf=this.user.cv
  }
  if (this.userimage==null){
    this.userimage=this.user.picture
  }
  this.user.cv=this.userPdf
  this.user.email=this.profileForm.value.email
  this.user.name=this.profileForm.value.username
  this.user.picture=this.userimage
  this.user.skills=$(".tagg").val()

 
          
  this.service.profilupdate(this.user).subscribe(
    data=>{
      sessionStorage.setItem("user",JSON.stringify(data))
      }
  )
  }

  constructor(private service : CandidateService ) {

   }





  ngOnInit() {
    this.user=JSON.parse(sessionStorage.getItem("user"))
console.warn(this.user)
    this.profileForm=new FormGroup({
      username : new FormControl(this.user.name),
      email : new FormControl(this.user.email)
    })
  

    this.loadScript('https://bootstrap-tagsinput.github.io/bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js')
    this.loadScript('../../../../assets/dashboard/js/candidateprofile.js')
    this.css('../../../../assets/dashboard/css/tag.css')
  }

}



