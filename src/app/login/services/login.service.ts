import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';




@Injectable()


export class LoginServive{
    constructor(private httpService: Http) {
        
            }
    public login(): Observable<any>{
        return this.httpService.get('http://localhost:50168/api/login')
        .map((res:Response) => {
            console.log(res);
            
        })
        }
}