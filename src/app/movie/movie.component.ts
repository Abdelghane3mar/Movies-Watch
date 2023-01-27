import { Component } from '@angular/core';
import { WatchsService } from '../watchs.service';



@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {

  trendingMovies:any = [] ;
  searchText:string = "" ;

  image = "https://image.tmdb.org/t/p/w500/" ;


  constructor(private _WatchsService:WatchsService)
  {

    _WatchsService.getTrending("movie").subscribe( (data) => {

      this.trendingMovies= data.results; 
      },

      (err) => console.log(err) );


  }

}
