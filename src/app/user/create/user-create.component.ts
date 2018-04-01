import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { error } from 'util';

@Component({
  selector: 'user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss'],
  providers: [UserService]
})

export class UserCreateComponent  implements OnInit{
  public users = [];
  constructor (private _userService: UserService) {
  }

  ngOnInit() {
  }
  store() {

  }
}
