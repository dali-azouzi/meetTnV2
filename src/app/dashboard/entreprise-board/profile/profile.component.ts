import { Component, OnInit } from '@angular/core';
declare const $:any

@Component({
  selector: 'app-entrepriseProfile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css',
  '../../../../assets/dashboard/css/argon.css']
})
export class EntrepriseProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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