import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import {RegisterService} from '../../services/register.service';
import {RegisterModel} from '../../models/register.model'

@Component({
    selector: 'my-register',
    templateUrl: './register.component.html'
})


export class RegisterComponent{

    title: string = "Register";
    message: string;

    constructor(private registerService: RegisterService,private router: Router){}

     registerUser(userName : string, password: string){
         let user: RegisterModel= new RegisterModel();
         user.UserName = userName ;
         user.Password = password;
         this.registerService.registerUser(user).subscribe((res:any)=>{
             this.message= "User Created. GO to login ->";
         })

      }
      
      login(){
        {
            this.router.navigate(['/login']);
        }
      }
}
