import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './landing/navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { CandidateComponent } from './landing/candidate/candidate.component';
import { ClientsComponent } from './landing/clients/clients.component';
import { FooterComponent } from './footer/footer.component';
import { EntrepriseComponent } from './landing/entreprise/entreprise.component';
import { LoginComponent } from './auth/login/login.component';
import { EntrepriseLoginComponent } from './auth/entreprise/entreprise.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CandidateBoardComponent } from './dashboard/candidate-board/candidate-board.component';
import { EntrepriseBoardComponent } from './dashboard/entreprise-board/entreprise-board.component';
import { ProfileComponent } from './dashboard/candidate-board/profile/profile.component';
import { MatchesComponent } from './dashboard/candidate-board/matches/matches.component';
import { MyEventsComponent } from './dashboard/candidate-board/my-events/my-events.component';
import { EventsComponent } from './dashboard/entreprise-board/events/events.component';
import { AddEventComponent } from './dashboard/entreprise-board/events/add-event/add-event.component';
import { EventDetailsComponent } from './dashboard/entreprise-board/events/event-details/event-details.component';
import { EntrepriseProfileComponent } from './dashboard/entreprise-board/profile/profile.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { InterviewComponent } from './dashboard/entreprise-board/interview/interview.component';
import { candidateInterviewComponent } from './dashboard/candidate-board/interview/interview.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    CandidateComponent,
    ClientsComponent,
    FooterComponent,
    EntrepriseComponent,
    LoginComponent,
    EntrepriseLoginComponent,
    DashboardComponent,
    CandidateBoardComponent,
    EntrepriseBoardComponent,
    ProfileComponent,
    MatchesComponent,
    MyEventsComponent,
    EventsComponent,
    AddEventComponent,
    EventDetailsComponent,
    EntrepriseProfileComponent,
    NotfoundComponent,
    InterviewComponent,
    candidateInterviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
