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
    currentUserId: number;
    result: any[];
    constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router){
    }

    ngOnInit() {

        this.route.params.subscribe(params => { 
            this.userId = +params['userid']; 
             this.currentUserId = this.userId;
            console.log(this.userId);
        }); 

        this.userService.getContacts(this.currentUserId).subscribe((cont:any) =>
            {
                console.log(cont);
                console.log(cont);
                this.result = cont;
            
            })


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