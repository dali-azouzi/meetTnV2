import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const host :string ="http://localhost:5000/";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private router : HttpClient) { }
  addCandidate(body:any){
    return this.router.post(host+'/auth/register',body)
  }

  addEntreprise(body:any){
   return this.router.post(host+'auth/addEntreprise',body)
  }
  login(body:any){
   return this.router.post(host+'auth/login',body)
  }

}
