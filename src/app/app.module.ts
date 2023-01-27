import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WatchsComponent } from './watchs/watchs.component';
import { MovieComponent } from './movie/movie.component';
import { TvComponent } from './tv/tv.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WatchsDetailsComponent } from './watchs-details/watchs-details.component';
import { PeopleComponent } from './people/people.component';
import { NetworkComponent } from './network/network.component';
import { RoundPipe } from './round.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SearchPipe } from './search.pipe';





@NgModule({
  declarations: [
    AppComponent,
    WatchsComponent,
    MovieComponent,
    TvComponent,
    NavbarComponent,
    FooterComponent,
    NotfoundComponent,
    HomeComponent,
    AboutComponent,
    WatchsDetailsComponent,
    PeopleComponent,
    NetworkComponent,
    RoundPipe,
    RegisterComponent,
    LoginComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
