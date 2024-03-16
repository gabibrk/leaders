import { Component, EventEmitter, Output } from '@angular/core';
import { UsersApiService } from '../../serivces/users.api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {
  @Output() userProfileDataEmitter = new EventEmitter<userProfileData>()
  public searchResults: any[] = []
  public userProfileData: userProfileData = { user: null, feeds: null }

  constructor(private ser: UsersApiService) {

  }
  search(value: string) {
    console.log(value)
    this.ser.searchUsers(value).subscribe(res => {
      console.log(res)
      this.searchResults = res
    })
  }

  setSelectUser(user: any) {
    console.log("user", user)
    this.searchResults = []
    this.ser.getUserFeeds(user.user_id).subscribe(feeds => {
      console.log("res", feeds)
      this.userProfileDataEmitter.emit({user, feeds})
    })
  }

  toggleWindow() {

  }
}

type userProfileData = { user: any; feeds: any; }
