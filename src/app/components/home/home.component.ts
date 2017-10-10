import { Component } from  '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { UserService } from '../../services/user.service';
import { ContactModel } from '../../models/contact.model';

@Component({
    selector:'my-home',
    templateUrl:'./home.component.html'

})
export class HomeComponent {
    title :string = "Home Page";
    userId: number;
    constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router){
    }

    ngOnInit() {

        this.route.params.subscribe(params => { 
            this.userId = +params['userid']; 
            console.log(this.userId);
        }); 
    }
    save(name: string, number: string) {
        let data: ContactModel = new ContactModel();
        data.ContactName = name;
        data.ContactNumber = number;
        data.UserId = this.userId.toString();
        this.userService.addContact(data).subscribe((res: any) => {
            console.log('save result is ',res);
        });
    }
}