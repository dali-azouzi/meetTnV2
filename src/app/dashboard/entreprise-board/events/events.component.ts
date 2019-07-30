import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from 'src/app/services/entreprise.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'
  ,'../../../../assets/dashboard/css/argon.css']
})
export class EventsComponent implements OnInit {
user;
data;
  constructor(private service : EntrepriseService) { 
   this.user=JSON.parse(sessionStorage.getItem('user'));
    this.service.getevents(this.user.id).subscribe(
      data=>{
        this.data=data
      console.log(data);
      
      }
    )
  }

 StorageEvent(){
   
 }


  ngOnInit() {
  }

}
