import { AuthGuard } from './auth.guard';
import { WatchsDetailsComponent } from './watchs-details/watchs-details.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { TvComponent } from './tv/tv.component';
import { PeopleComponent } from './people/people.component';
import { NetworkComponent } from './network/network.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"" , redirectTo:"home" , pathMatch:"full"} ,
  {path:"home" , component:HomeComponent} ,
  {path:"about" ,   component:AboutComponent} ,
  {path:"movie" ,   component:MovieComponent} ,
  {path:"tv" ,   component:TvComponent} ,
  {path:"people" ,   component:PeopleComponent} ,
  {path:"network" ,   component:NetworkComponent} ,
  {path:"watchs_details/:id" , component:WatchsDetailsComponent} ,
  {path:"register" , component:RegisterComponent} ,
  {path:"login" , component:LoginComponent} ,
  {path:"**" , component:NotfoundComponent} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
