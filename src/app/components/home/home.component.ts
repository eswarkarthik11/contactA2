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
    user: string ;
    currentUserId: number;
    result: any[];
    constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router){
    }

    ngOnInit() {

        this.route.paramMap.subscribe(params => { 
            //console.log("Data came")
            this.userId = +params.get('userid');//['userid']; 
            //console.log(this.userId);
             this.currentUserId = this.userId;
        }); 

        this.userService.getContacts(this.currentUserId).subscribe((cont: any) =>
            {console.log(cont);
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
            let temp = { ContactName : res.ContactName, ContactNumber: res.ContactNumber, UserId : res.UserId};
           // console.log(temp);
            this.result.push(temp);
        });
    }

    logout(){
        this.router.navigate(['/login']);
    }
}