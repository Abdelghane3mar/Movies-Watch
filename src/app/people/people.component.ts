import { Component } from '@angular/core';
import { WatchsService } from './../watchs.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {

  trendingPeople:any = [] ;
  searchText:string = "" ;

  image = "https://image.tmdb.org/t/p/w500/" ;

  constructor(private _WatchsService:WatchsService){

    _WatchsService.getTrending("person").subscribe( (data) => {

      this.trendingPeople = data.results ;

    } ,
    (err) => console.log(err) ) ;

  }

}
