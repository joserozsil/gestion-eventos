import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: [
    './user-list.component.scss'
  ],
  providers: [UserService]
})

export class UserListComponent  implements OnInit{
  private users = [];
  private loading:boolean = false;

  constructor (private userService: UserService, public toastr: ToastsManager, public vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.show();
  }
  show() {
    this.loading = true;
    this.userService.index().subscribe(
      result => {
        if(!result.data) {
          this.users = [];
          this.loading = false;
        } else {
          result.data.forEach(element => {
            this.users.push(element);
          });
          this.loading = false;
        }
      }, 
      error => {
        let errorMessage = <any>error;
        let userMessage = JSON.parse(errorMessage._body);
        this.toastr.error(`${userMessage.meta.userMessage}`, '¡Error!');
        setTimeout(() => {
          this.toastr.error(`${userMessage.meta.devMessage}`, '¡Error!');
        }, 500);
        this.loading = false;
      }
    );
  }

  delete(id:string, index:String) {
    this.loading = true;

    this.userService.delete(id).subscribe(
      result => {
        if( result.meta.status == 200) {
          this.toastr.success('Usuario eliminado correctamente', '¡Listo!');
          this.loading = false;
        }
      }, 
      error => {
        let errorMessage = <any>error;
        let userMessage = JSON.parse(errorMessage._body);
        this.toastr.error(`${userMessage.meta.userMessage}`, '¡Error!');
        setTimeout(() => {
          this.toastr.error(`${userMessage.meta.devMessage}`, '¡Error!');
        }, 500);
        this.loading = false;
      }
    );
  }
}
