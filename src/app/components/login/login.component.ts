import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { LoginService } from '../../services/login.service';
@Component({
    selector: 'my-login',
    templateUrl: './login.component.html'
})
export class LoginComponent {

    title: string = "Login";
    message: string = "Welcome to login page"

    constructor(private loginService: LoginService, private router: Router){
    }

    public login(userName: string, password: string) {
        this.loginService.login(userName, password)
        .subscribe((res: any) => {
            console.log('login response', res);
            if(res) {
                this.router.navigate(['/home', res.UserId]);
            } else {
                // show login failure
            }
        });
    }
}