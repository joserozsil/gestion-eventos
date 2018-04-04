import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
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

  private confirmPassword:string = "aderADW7$";
  private type="password";

  constructor (private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    
  }

  private saveUser() {
    console.log(this.createUserForm);
    let user = new User(this.createUserForm.value);
    this.userService.store(user).subscribe(
      result => {
        console.dir(result);
        console.info('Registrado correctamente');
        this.router.navigate(['/user/list']);
      }, 
      error => {
        let errorMessage = <any>error;
        console.error(errorMessage);
      }
    );
  }

  private console(test:any) {
    console.log(test)
  }

}
