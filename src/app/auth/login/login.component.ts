import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  CandidateForm = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(6)]),
    email: new FormControl('', Validators.email),
    password: new FormControl('',Validators.minLength(6))

  });
  constructor(private Service:AuthService) { }
  signup(){
    console.log(this.CandidateForm.value);
    
    this.Service.addCandidate(this.CandidateForm.value).subscribe(
      data=>{
        console.log(data);
      }
    );
  }
  ngOnInit() {
    /* animation js*/
    document.querySelector('.img__btn').addEventListener('click', function() {
      document.querySelector('.cont').classList.toggle('s--signup');
    });
    /*-----*/
  }

}
