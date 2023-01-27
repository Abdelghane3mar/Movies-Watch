import { Component } from '@angular/core';
import { WatchsService } from '../watchs.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent {

  trendingTv:any = [] ;

  searchText:string ="" ;

  image = "https://image.tmdb.org/t/p/w500/" ;


  constructor(private _WatchsService:WatchsService)
  {

    _WatchsService.getTrending("tv").subscribe( (data) => {

      this.trendingTv= data.results; 
      },

      (err) => console.log(err) );


  }

}
