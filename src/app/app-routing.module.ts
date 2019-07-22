import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LandingComponent } from './landing/landing.component';
import { CandidateComponent } from './landing/candidate/candidate.component';
import { EntrepriseComponent } from './landing/entreprise/entreprise.component';
import { EntrepriseLoginComponent } from './auth/entreprise/entreprise.component';
import { CandidateBoardComponent } from './dashboard/candidate-board/candidate-board.component';
import { EntrepriseBoardComponent } from './dashboard/entreprise-board/entreprise-board.component';
import { ProfileComponent } from './dashboard/candidate-board/profile/profile.component';
import { MatchesComponent } from './dashboard/candidate-board/matches/matches.component';
import { MyEventsComponent } from './dashboard/candidate-board/my-events/my-events.component';
import { EntrepriseProfileComponent } from './dashboard/entreprise-board/profile/profile.component';
import { EventsComponent } from './dashboard/entreprise-board/events/events.component';
import { AddEventComponent } from './dashboard/entreprise-board/events/add-event/add-event.component';
import { EventDetailsComponent } from './dashboard/entreprise-board/events/event-details/event-details.component';

const routes: Routes = [

 
  {path:'',component:LandingComponent,children:[
    {path:'',component: CandidateComponent},
    {path:'landing2',component:EntrepriseComponent},
    {path:"login",component:LoginComponent},
  ]},
  {path:'landing1',redirectTo:'',pathMatch:'full'},
  {path:'auth/entreprise',component : EntrepriseLoginComponent},
  {path:'dashboard' , children:[
    {path:"candidate", component:CandidateBoardComponent,children:[
        {path:'profile',component:ProfileComponent},
        {path:'matches',component:MatchesComponent},
        {path:'myevents',component:MyEventsComponent}
    ]},
    {path:'entreprise',component:EntrepriseBoardComponent,children:[
      {path:'profile',component:EntrepriseProfileComponent},
        {path:'events',component:EventsComponent},
          {path:'events/add',component:AddEventComponent},
          {path:'events/event-details',component:EventDetailsComponent}
    ]}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
