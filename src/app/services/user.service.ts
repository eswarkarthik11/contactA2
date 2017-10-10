import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

import { ContactModel } from '../models/contact.model';

@Injectable()
export class UserService {

    //userRepoUrl: string = `https://api.github.com/users/{userName}/repos`;
    constructor(private httpService: Http) {

    }

    public getusers(): Observable<any>{
        return this.httpService.get('http://localhost:50168/api/users')
        .map((res:Response) => {
            console.log(res.json());
            return res.json() || {}
        })
        .catch(this.handleError);
    }

        public getContacts(currentUserId: number): Observable<any>{
        return this.httpService.get('http://localhost:50168/api/contacts/'+currentUserId)
         .map(response => response.json())
        .catch(this.handleError);
    }

    public addContact(data: ContactModel): Observable<any>{
        let body = {
            ContactName: data.ContactName,
            ContactNumber: Number(data.ContactNumber),
            UserId: data.UserId
        };
        console.log(body);
        
        return this.httpService.post('http://localhost:50168/api/contacts', body)
        .map(response => response.json())
        .catch(this.handleError);
    } 
        
    
    // public getUserRepos(userName: string): Observable<any> {
    //     return this.httpService.get(this.userRepoUrl.replace('{userName}', userName))
    //         .map((res: Response) => {
    //             console.log(res.json());
    //             return res.json() || {}
    //         })
    //         .catch(this.handleError);
    // }

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