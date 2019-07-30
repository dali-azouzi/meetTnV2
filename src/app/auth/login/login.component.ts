import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
error=false;
user : any[]
  signinForm = new FormGroup({
    email : new FormControl(),
    password : new FormControl()
  }

  );

  CandidateForm = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(6)]),
    email: new FormControl('', Validators.email),
    password: new FormControl('',Validators.minLength(6))

  });
  constructor(private Service:AuthService,  private router: Router) { }
  
  signup(){
    console.log(this.CandidateForm.value);
    
    this.Service.addCandidate(this.CandidateForm.value).subscribe(
      data=>{
        console.log(data);
      }
    );
  }


  signin(){
    console.log(this.signinForm.value);
    this.Service.login(this.signinForm.value).subscribe(
      (data :any) =>{
        console.log(data);
        if (data){
        this.user=data
        sessionStorage.setItem("user",JSON.stringify(this.user))
          if (data.user == "entreprise"){
      
            this.router.navigate(['/dashboard/entreprise']);
          } else {  this.router.navigate(['/dashboard/candidate']);}
        } else {
          this.error=true
        }
       
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
