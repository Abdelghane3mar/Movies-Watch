import { Observable , BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";
import { Router } from '@angular/router' ;
import { AnimateTimings } from '@angular/animations';




@Injectable({
  providedIn: 'root'
})
export class AuthService {


  currentUserData:any = new BehaviorSubject(null) ;

  constructor(public _HttpClient:HttpClient , private _Router:Router) { 

    if(localStorage.getItem('currentUser')!=null)
    {
        this.saveCurrentUserData();
      }
    
    
    

  }

   register(formData:object):Observable<any>
   {
       return  this._HttpClient.post(`https://sticky-note-fe.vercel.app/signup` , formData) ;

   }

   login(formData:object):Observable<any>
   {
       return  this._HttpClient.post(`https://sticky-note-fe.vercel.app/signin` , formData) ;

   }

   saveCurrentUserData()
   {
 
     let encodedToken:any = localStorage.getItem("currentUser") ;
 
     let decodedToken = jwt_decode(encodedToken) ;
 
     this.currentUserData.next(decodedToken) ;

     console.log(this.currentUserData)
 
   }

   LogOut(){
    localStorage.removeItem('currentUser');
    this.currentUserData.next(null);
    this._Router.navigate(['/login'])
   }

}



