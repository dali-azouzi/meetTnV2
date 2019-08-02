import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const host :string ="http://localhost:5000/";

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  
  constructor(private http : HttpClient) {  }
  getevents(id){
    return this.http.get(host+'candidate/events/'+id) }

    profilupdate(body){
      return this.http.put(host+'candidate',body)
    }

    getmatchs( id){
      return this.http.get(`${host}event/matches/${id}`)
    }

     uploadPdf(file , userID){
      let headers: HttpHeaders = new HttpHeaders();
       return this.http.post(`http://us-central1-hiremestorage-3b2b1.cloudfunctions.net/pdfUpload?id=${userID}`
       , file)
     }
     uploadImage(file , userID){
      let headers: HttpHeaders = new HttpHeaders();
       return this.http.post(`http://us-central1-hiremestorage-3b2b1.cloudfunctions.net/imageUpload?id=${userID}`
       , file)
     }



    subscribe(id_event , id_subscriber){
        return this.http.put(`${host}event/${id_event}/${id_subscriber}`,{})
    }
}
