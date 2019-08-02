import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EntrepriseService } from 'src/app/services/entreprise.service';
declare const $:any

let profilepicture


@Component({
  selector: 'app-entrepriseProfile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css',
  '../../../../assets/dashboard/css/argon.css']
})
export class EntrepriseProfileComponent implements OnInit {
  user
  userform
  userimage
  constructor(private service :EntrepriseService) {

  }

  // let selectedpdf = event.target.files[0]
  // const fb =  new FormData()
  // fb.append('file',selectedpdf)

  ngOnInit() {
   this.user=JSON.parse(sessionStorage.getItem("user"))
   if(!this.user.picture){
    this.user.picture='https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'
  }

    this.userform=new FormGroup({
      name: new FormControl(this.user.name),
      email : new  FormControl(this.user.email),
      breefing : new FormControl(this.user.breefing),
      adress : new FormControl(this.user.adress)
    })
    console.log(this.userform.value);

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
    console.log(this.userform.value);
    console.log(profilepicture);
    

    if (this.userimage==null){
      this.userimage=this.user.picture
    }
    this.user.name=this.userform.value.name
    this.user.email=this.userform.value.email
    this.user.breefing=this.userform.value.breefing
    this.user.adress=this.userform.value.adress
    this.user.picture=this.userimage
    
    
    



    this.service.update(this.user).subscribe((data)=>{
      console.log(data);
      
      this.user=data
      sessionStorage.setItem("user", JSON.stringify( this.user ))
      
    })
  }



}



$(document).ready(function () {
  // Prepare the preview for profile picture
  $("#wizard-picture").change(function () {
      readURL(this);
  });
});
function readURL(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e : any) {
        
          $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
        
          
      }
      reader.readAsDataURL(input.files[0]);
     
      
      
      
  }
}