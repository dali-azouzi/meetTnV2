import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EntrepriseService } from 'src/app/services/entreprise.service';
declare const $ :any
declare const M :any

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit , OnDestroy{
   eventForm =new FormGroup({
     eventname : new FormControl(),
     EventDetails : new FormControl()
    }) 
 event : any = {
  event_name : String,  
  since : String,
  until :String,
  description : String,
  skills :String,
  packagetype:String
 }


switchDateformat(date :string):string{
  let datearray:any[]=[]
  datearray=date.split('/')
  return ( `${datearray[2]}-${datearray[1]}-${datearray[0]}`  )
}


  addEvent(){

    console.log();
    
    this.event.event_name=this.eventForm.value.eventname,
    this.event.since=this.switchDateformat($('#StartEvent').val()),
    this.event.until=this.switchDateformat($('#EndEvent').val()),
    this.event.description=this.eventForm.value.EventDetails,
    this.event.skills=$(".tagg").val()




if ($("input[name='demo']")[0].checked){
  this.event.packagetype="Starter"
}
 else if ($("input[name='demo']")[1].checked){
  this.event.packagetype="Value"
}
else if ($("input[name='demo']")[2].checked){
  this.event.packagetype="Premium"
}
else {
  this.event.packagetype="null"
}
    //get Date
    //console.log($('#StartEvent').val());

  console.log(this.event);
this.service.addevent(JSON.parse(sessionStorage.getItem("user")).id,this.event).subscribe(
  (data:any)=>{
    console.log(data);
  }
)

  }

  public deleteCss(url : string) {
  	$("[href*='"+url+"']").remove()
  }
  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
  public css(url: string) {
    const body = <HTMLDivElement> document.body;
    const link = document.createElement('link');
    link.rel = 'stylesheet';    
    link.type = 'text/css'; 
    link.href = url; 
    body.appendChild(link);
    
  }


  // $("input[name='demo']")[i].checked


  constructor(private service : EntrepriseService) { }

  ngOnInit() {
    // this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js')
    this.loadScript('../../../../../assets/dashboard/js/plugins/bootstrap-datepicker.min.js')
    this.loadScript('https://cdn.jsdelivr.net/npm/bootstrap-tagsinput@0.7.1/dist/bootstrap-tagsinput.min.js')
     this.css('https://demos.creative-tim.com/argon-dashboard/assets/css/argon-dashboard.min.css?v=1.1.0')
     this.css('../../../../../assets/dashboard/css/tag.css')
setTimeout(() => {
  $('.datepicker').datepicker({
    weekStart:1
});
$("[class*='bootstrap-tagsinput']").addClass('input-group input-group-alternative ')
console.log('done');

}, 5000);
 


// input-group input-group-alternative mb-4

}


ngOnDestroy(){
this.deleteCss('')
}
//to get skills data
// M.Chips.getInstance($('.chips')).chipsData
}

