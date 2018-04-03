import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

import { error } from 'util';
import { User } from '../../models/user';

@Component({
  selector: 'user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss'],
  providers: [UserService]
})

export class UserCreateComponent  implements OnInit {

  private firstName:string ="Jose Angel";
  private lastName:string = "Rodriguez Silva";
  private phone:string = "04249566353";
  private address:string = "Ud, 146. San Felix edo Bolivar";
  private idCard:string = "24847272";
  private password:string = "aderADW7$";
  private confirmPassword:string = "aderADW7$";

  constructor (private _userService: UserService) {
  }

  ngOnInit() {
    
  }

  private saveUser() {
    let user = new User();
    user.firstName = this.firstName;
    user.lastName = this.lastName;
    user.phone = this.phone;
    user.address = this.address;
    user.password = this.password;
    user.idCard = this.idCard;

    this._userService.store(user).subscribe(
      result => {
        if(result.data.status == 200) {
          console.dir(result);
          console.info('Registrado correctamente');
        } else {
          console.log(result.meta);
          console.log('No ha pasado nada');
        }
      }, 
      error => {
        let errorMessage = <any>error;
        console.error(errorMessage);
      }
    );
  }
}
