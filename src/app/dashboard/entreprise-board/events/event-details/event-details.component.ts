import { Component, OnInit, Sanitizer } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntrepriseService } from 'src/app/services/entreprise.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';


@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'
  ,'../../../../../assets/dashboard/css/argon.css']
})
export class EventDetailsComponent implements OnInit   {
 
 
  event
  routes 
EventId:string
  subs:any[] 
  subsPDF:any[]=[]
  count=0;
  chairsCount
  constructor( private service:EntrepriseService ,
     private route : ActivatedRoute, private sanitizer : DomSanitizer) {
   }
   test(){
     this.event=null
   }
   accept(id){
   
     
     this.service.accept(this.EventId,id, this.event).subscribe((data:any[])=>{
       this.subs=data
       
     })
   }
   decline(id){
     this.service.decline(this.EventId,id,{}).subscribe((data:any[])=>{
this.subs=data
     })
   }
   urlClean(i) :SafeResourceUrl{
       
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.subsPDF[i]);
   }

  ngOnInit() {
  this.routes=this.route.params.subscribe((data)=>{
       this.routes=data['id'];
       this.EventId=data['id']
       
      this.service.geteventbyid(this.routes).subscribe((callback:any)=>{
        this.event=callback;
       let packages : any=callback.packagetype;
       if (packages =='Starter') {
         this.chairsCount=' / '+10
       } else if ( packages =='Value'){
         this.chairsCount=' / '+30
       }
       else{
         this.count=null
         this.chairsCount='unlimited'
       }
      })
       this.service.displaySubs(this.routes).subscribe((subs)=>{
        this.subs=<any[]>subs;

        
        for(let subscriber of this.subs){
           let cvUrl:string=subscriber.candidate.cv
           
           
          
          this.subsPDF.push(cvUrl)

          console.log(subscriber);  
          if (subscriber.status=='Accepted') {
            this.count++
          }
        }
        console.log(this.subsPDF);
        
      })
      

  }
  )
    
  }

}
