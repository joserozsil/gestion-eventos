import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { error } from 'util';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  providers: [UserService]
})

export class UserListComponent  implements OnInit{
  public users = [];
  constructor (private _userService: UserService) {
  }

  ngOnInit() {
    this.show();
  }
  show() {
    this._userService.index().subscribe(
      result => {
        if(!result.data) {
          this.users = [];
        } else {
          this.users = result.data;
        }
      }, 
      error => {
        let errorMessage = <any>error;
        console.error(errorMessage);
      }
    );
  }

  delete(idCard:string) {
    this._userService.delete(idCard).subscribe(
      result => {
        if( result.meta.status == 200) {
          console.log(result.meta.userMessage);
          this.users.splice(result.data.idCard, 1);
        }
      }, 
      error => {
        let errorMessage = <any>error;
        console.error(errorMessage);
      }
    );
  }
}
