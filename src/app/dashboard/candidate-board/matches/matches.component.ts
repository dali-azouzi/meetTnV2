import { Component, OnInit } from '@angular/core';
import { CandidateService } from 'src/app/services/candidate.service';
declare const $:any

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css'
,'../../../../assets/dashboard/css/argon.css']
})
export class MatchesComponent implements OnInit {
  click :any[]=[]
  issubbed:any[]=[]
  userID
  events
  skills

  public loadScript(url: string) { 
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
  skill(data : string){
    this.skills=''
    this.skills=data.split(',')
    return this.skills
  }

  subscribe(id_event , i ){

    this.service.subscribe(id_event ,this.userID ).subscribe(
      data=>{
        this.click[i]=true

        if (data) {
          this.issubbed[i]=true
        } else {
          this.issubbed[i]=false
        }

      
      }
    )
  }
  constructor(private service : CandidateService) { 

    this.userID=JSON.parse(sessionStorage.getItem("user")).id;
    this.service.getmatchs( this.userID ).subscribe(
      (data:[])=>{     
     for (let index = 0; index < data.length; index++) {
       this.click.push(false)
       this.issubbed.push(null)
       
     }
      this.events=data
    })
   
   
  }
    
      ngOnInit() {

        
        
  
}

}

