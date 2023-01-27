import { WatchsService } from './../watchs.service';
import { Component } from '@angular/core';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent {

  trendingMovies:any = [] ;
  trendingPerson:any = [] ;
  trendingTv:any = [] ;
  

  image = "https://image.tmdb.org/t/p/w500/" ;


  constructor(public _WatchsService:WatchsService )
  {
    _WatchsService.getTrending("movie").subscribe( (data) => {

      this.trendingMovies= data.results.slice(0 , 10); 
      },

      (err) => console.log(err) );

      _WatchsService.getTrending("tv").subscribe( (data) => {

        this.trendingTv= data.results.slice(0 , 10); 
        },
  
        (err) => console.log(err) );

        _WatchsService.getTrending("person").subscribe( (data) => {

          this.trendingPerson= data.results.slice(0 , 10); 
          },
    
          (err) => console.log(err) );
  };

}

