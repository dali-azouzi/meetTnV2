import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from 'src/app/services/entreprise.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entreprise-board',
  templateUrl: './entreprise-board.component.html',
  styleUrls: ['./entreprise-board.component.css',
  '../../../assets/dashboard/css/argon.css']
})
export class EntrepriseBoardComponent implements OnInit {
  hover=false
  events
  subs
  NotificationSubs=0
  isItLive : boolean =false
  eventId:any
  today = Date.now()/1000

Notfication:any[]=[]


constructor(private service : EntrepriseService , private router : Router) { }

  ngOnInit() {
    this.service.getevents(JSON.parse(sessionStorage.getItem("user")).id).subscribe(
      (data:any[])=>{
        this.events=data
        /*******/
       for (let index = 0; index < this.events.length; index++) {
        
        this.service.displaySubs(this.events[index].id).subscribe(
          (data:any[])=>{
            let sum =0
            let object={
              pending:0,
              eventId:'',
              eventName:''
            }

            for (let subs of data) {
              if(subs.status=="Pending"){
               
                
                sum++
              }  
            }
            object.pending=sum
            object.eventId=this.events[index].id
            object.eventName=this.events[index].event_name
            if(object.pending!=0){
           this.Notfication.push(object)
           this.NotificationSubs+=sum
            }
          
          }
          )
           }
           for (let index = 0; index < this.events.length; index++) {
             let since = new Date(this.events[index].since).getTime()/1000           
             let until = new Date(this.events[index].until).getTime()/1000

            if ( (since <= this.today) && (this.today <=until) ){

              
            this.isItLive=true
            this.eventId=this.events[index].id
           break
            }
            
           }

      }
      
    )

    
    
  }

  logout(){
    sessionStorage.removeItem('user')
    this.router.navigate(['/'])
  }


}
