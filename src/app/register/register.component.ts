import { Component } from '@angular/core';
import { FormControl , FormGroup , Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';





@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  
  err:any;

  constructor(private _AuthService:AuthService , private _Router:Router ) {}


  registerForm:FormGroup = new FormGroup({
        
        first_name : new FormControl(null , [Validators.required , Validators.minLength(3) , Validators.maxLength(10)]),
        last_name : new FormControl(null , [Validators.required , Validators.minLength(3) , Validators.maxLength(10)]),
        age : new FormControl(null , [Validators.required , Validators.min(10) , Validators.max(80)]),
        email : new FormControl(null , [Validators.required , Validators.email]),
        password : new FormControl(null , [Validators.required , Validators.pattern('^[A-Za-z0-9]{3,10}$')]),

        
  }) ;

  getFormData(registerForm:FormGroup)
  {
    if(registerForm.valid)
    {
        this._AuthService.register(registerForm.value).subscribe( (register) => {


          if (register.message === 'success') 
          {

              this._Router.navigate(['/login']) ;
            
          }
          else
          {
              this.err =  register.message;
          }

          } ) ;

    }

  }

}

