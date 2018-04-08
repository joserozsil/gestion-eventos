import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { UserService } from '../../services/user.service';
import { error } from 'util';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  providers: [UserService]
})

export class UserListComponent  implements OnInit{
  public users = [];
  constructor (private userService: UserService, public toastr: ToastsManager, public vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.show();
  }
  show() {
    this.userService.index().subscribe(
      result => {
        if(!result.data) {
          this.users = [];
        } else {
          result.data.forEach(element => {
            this.users.push(element);
          });
        }
      }, 
      error => {
        let errorMessage = <any>error;
        console.error(errorMessage);
      }
    );
  }

  delete(idCard:string) {
    this.userService.delete(idCard).subscribe(
      result => {
        if( result.meta.status == 200) {
          console.log(result.meta.userMessage);
          this.users.splice(result.data.idCard, 1);
          this.toastr.success('Usuario eliminado correctamente', '¡Listo!');
        }
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
}
