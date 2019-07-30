import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
declare const $ :any
declare const M :any

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit , OnDestroy{
  test = new FormGroup({
    name : new FormControl()
   
  }
  );

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


  constructor() { }

  est(){
    console.log(this.test.value);
  }

  ngOnInit() {
    this.loadScript('../../../../../assets/dashboard/js/Kjquery.steps.js')
    this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js')
    this.loadScript('../../../../../assets/dashboard/js/kentreprisewizard.js')
    this.loadScript('../../../../../assets/dashboard/js/plugins/bootstrap-datepicker.min.js')
    this.css('https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css')
    this.css('../../../../../assets/dashboard/css/entrepriseWizard.css')
    this.css('../../../../../assets/dashboard/css/argon.min.css')
    this.css('../../../../../assets/dashboard/fonts/material-design-iconic-font/css/material-design-iconic-font.css')
setTimeout(() => {
  $('.datepicker').datepicker({
    weekStart:1
});
console.log('done');
$( function() {
  var elems = document.querySelectorAll('.chips');
  var instances = M.Chips.init(elems, {
     placeholder: 'Enter a tag',
     secondaryPlaceholder: '+Tag',
  });
});
}, 5000);
 
}
ngOnDestroy(){
this.deleteCss('https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css')
}
//to get skills data
// M.Chips.getInstance($('.chips')).chipsData
}

