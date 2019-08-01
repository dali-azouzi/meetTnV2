import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const host :string ="http://localhost:5000/";


@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {


  constructor(private http : HttpClient) { }

  addevent(id,body){
    return this.http.post(host+'event/'+id,body)
  }

  getevents(id){
    return this.http.get(host+'entreprise/events/'+id)
  }
  displaySubs(id){
    return this.http.get(host+'getsubs/'+id)
  }

  geteventbyid(id){
    return this.http.get(host+'event/'+id)
  }
  accept(eventId,candidate,event){
    const Header={
      headers :new HttpHeaders({
      'Access-Control-Allow-Origin':'*'
    })
  
   }

    return this.http.put(host+'event/acceptSub/'+eventId+'/'+candidate,event)
  }
  decline(eventId,candidate,event){
   return this.http.put(host+'event/declineSub/'+eventId+'/'+candidate,{}) 
  }
  update(entreprise){
    
    return this.http.put(host+'entreprise/update',entreprise)
  }
  uploadImage(file , userID){
    let headers: HttpHeaders = new HttpHeaders();
     return this.http.post(`http://us-central1-hiremestorage-3b2b1.cloudfunctions.net/imageUpload?id=${userID}`
     , file)
   }

  
}
