import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class WatchsService {

  constructor(public _HttpClient:HttpClient ) {

    
  }

    getTrending(MediaType:any):Observable<any>
    {

     return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${MediaType}/week?api_key=82ea68cd9f0a2b6d5a45c1db151ef969`) ;

    }



    getDetailsMovie(id:any):Observable<any>
    {

     return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=82ea68cd9f0a2b6d5a45c1db151ef969&language=en-US`) ;

    }
    
    getDetailsTv(id:any):Observable<any>
    {

     return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=82ea68cd9f0a2b6d5a45c1db151ef969&language=en-US`) ;

    }

    getDetailsPeople(id:any):Observable<any>
    {

     return this._HttpClient.get(`https://api.themoviedb.org/3/person/${id}?api_key=82ea68cd9f0a2b6d5a45c1db151ef969&language=en-US`) ;

    }

}
