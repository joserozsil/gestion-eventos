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
  public usuarios;
  constructor (private _userService: UserService) {
  }

  ngOnInit() {
    this._userService.show().subscribe(
      result => {
        this.usuarios = result.data;
        if(!this.usuarios) {

        }
      }, 
      error => {
        let errorMessage = <any>error;
        console.error(errorMessage);
      }
    );

  }
}
