import { WatchsService } from './../watchs.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';






@Component({
  selector: 'app-watchs-details',
  templateUrl: './watchs-details.component.html',
  styleUrls: ['./watchs-details.component.scss']
})
export class WatchsDetailsComponent {

  detailsMovie:any= [] ;

  detailsPeople:any= [] ;

  detailsTv:any= [] ;

  id:any ;

  image = "https://image.tmdb.org/t/p/w500/" ;


  constructor(private _ActivatedRoute:ActivatedRoute  , public _WatchsService:WatchsService)
  {

    this.id =  _ActivatedRoute.snapshot.paramMap.get('id');

    _WatchsService.getDetailsMovie(this.id).subscribe( data => {

      this.detailsMovie= data ;
    }, 
    (err) => console.log(err))

    _WatchsService.getDetailsTv(this.id).subscribe( data => {

      this.detailsTv= data ;
    }, 
    (err) => console.log(err))


    _WatchsService.getDetailsPeople(this.id).subscribe( data => {

      this.detailsPeople= data ;
    }, 
    (err) => console.log(err))

  }


}

