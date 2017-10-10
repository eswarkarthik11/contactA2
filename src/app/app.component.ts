import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userRepos: any[];
  constructor(private userService: UserService){
  }

  getUserRepos(userName: string){
    this.userService.getUserRepos(userName).subscribe((repos: any) => {
      console.log(repos);
      this.userRepos = repos;
    });
  }

  getUsers() {
    this.userService.getusers().subscribe((users:any) => {
     console.log(users);
    });
  }

  getContacts() {
    this.userService.getContacts().subscribe((contacts:any)=>{
       console.log(contacts);
     });
  }
}
