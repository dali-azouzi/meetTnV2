import { Component, OnInit } from '@angular/core';
declare const $ :any

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function(){
      $('.customer-logos').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1000,
          arrows: false,
          dots: false,
              pauseOnHover: false,
              responsive: [{
              breakpoint: 768,
              settings: {
                  slidesToShow: 3
              }
          }, {
              breakpoint: 520,
              settings: {
                  slidesToShow: 2
              }
          }]
      });
    });
  }

}
    
