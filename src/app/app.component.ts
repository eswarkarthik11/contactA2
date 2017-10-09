import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubService } from './services/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userRepos: any[];
  constructor(private githubService: GithubService){
  }

  getUserRepos(userName: string){
    this.githubService.getUserRepos(userName).subscribe((repos: any) => {
      console.log(repos);
      this.userRepos = repos;
    });
   this.githubService.getusers().subscribe((users:any) => {
     console.log(users);
    });

     this.githubService.getContacts().subscribe((contacts:any)=>{
       console.log(contacts);
     });
   
  }
}
