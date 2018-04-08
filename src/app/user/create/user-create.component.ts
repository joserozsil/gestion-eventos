import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
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

  constructor (
    private userService: UserService,
    private router: Router,
    private toastr: ToastsManager,
    vcr: ViewContainerRef
  ) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    
  }

  private saveUser() {
    console.log(this.createUserForm);
    let user = new User(this.createUserForm.value);
    this.userService.store(user).subscribe(
      result => {
        console.dir(result);
        this.toastr.success('Registrado correctamente!', '¡Listo!');
        this.createUserForm.reset();
        setTimeout(() => {
          this.router.navigate(['/user/list']);
        }, 1500);
      }, 
      error => {
        let errorMessage = <any>error;
        let userMessage = JSON.parse(errorMessage._body);
        this.toastr.error(`${userMessage.meta.userMessage.message}`, '¡Error!');
        userMessage.meta.userMessage.details.more.forEach(element => {
          this.toastr.error(`${element.message}`, '¡Error!');
        });
      }
    );
  }

  private console(test:any) {
    console.log(test)
  }
}
