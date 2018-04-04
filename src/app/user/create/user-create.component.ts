import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { error } from 'util';

@Component({
  selector: 'user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss'],
  providers: [UserService]
})

export class UserCreateComponent  implements OnInit {
  @ViewChild('f') createUserForm: NgForm;

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
    console.log(this.createUserForm);
    //let user = new User(form.value);
    /*
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
    */
  }

  private console(test:any) {
    console.log(test)
  }
}
