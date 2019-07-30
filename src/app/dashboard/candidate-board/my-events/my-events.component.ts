import { Component, OnInit } from '@angular/core';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.css'
  ,'../../../../assets/dashboard/css/argon.css']
})

export class MyEventsComponent implements OnInit {
  user:any
data;
  constructor(private service : CandidateService) {
    this.user=JSON.parse(sessionStorage.getItem('user'));
    console.log(this.user.id);
     this.service.getevents(this.user.id).subscribe(
      data=>{
        this.data=data
        console.log(data[0].event_name);
     
      }
    );
     
 }


  ngOnInit() {

  }

}
