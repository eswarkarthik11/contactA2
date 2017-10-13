import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

import {RegisterModel} from '../models/register.model';


@Injectable()

export class RegisterService{

    constructor(private httpService: Http){    }

    public registerUser(user: RegisterModel): Observable<any>{

        let body = {
            UserName: user.UserName,
            Password: user.Password
        }

        return this.httpService.post('http://localhost:50168/api/users',body)
        .map(response => response.json())
        .catch(this.handleError);

    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error('user.service handleError()', errMsg);
        return Observable.throw(errMsg);
    }
}