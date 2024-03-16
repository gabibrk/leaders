import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {

  @Output() searchSelectedEmitter = new EventEmitter<any>()
  @Input() searchData:any[]=[]


  selectUser(user:any){
    console.log("user to emit", user)
    this.searchSelectedEmitter.emit(user)
  }
}
