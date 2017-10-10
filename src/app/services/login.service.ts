import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {
    constructor(private httpService: Http) {
    }

    public login(userName: String, password: String): Observable<any> {

        var userData = {
            userName: userName,
            password: password
        }
        return this.httpService.post('http://localhost:50168/api/login', userData)
            .map((res: Response) => {
                console.log(res);
                return res.json() || {}
            })
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
        console.error('github.service handleError()', errMsg);
        return Observable.throw(errMsg);
    }
}