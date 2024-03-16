import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  userProfile: any;
  feeds: any;

  setUserData(userData:any){
    this.userProfile = userData.user
    this.feeds  = userData.feeds
  }
}
