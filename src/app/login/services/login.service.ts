import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';




@Injectable()


export class LoginServive{
    constructor(private httpService: Http) {
        
            }
   
   
     public login(userName:String,password:String): Observable<any>{

    var x= {
            userName : userName,
            password : password
        }
        return this.httpService.post('http://localhost:50168/api/login',x)
        .map((res:Response) => {
            console.log(res);
     
        })
        }
}