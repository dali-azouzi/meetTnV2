import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate-board',
  templateUrl: './candidate-board.component.html',
  styleUrls: ['./candidate-board.component.css',
              '../../../assets/dashboard/css/argon.css']
})
export class CandidateBoardComponent implements OnInit {
hover=false



  constructor(private router : Router) { }

  ngOnInit() {  }
  logout(){
    sessionStorage.removeItem('user')
    this.router.navigate(['/'])
  }

}
