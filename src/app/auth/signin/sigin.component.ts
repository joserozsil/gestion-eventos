import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { error } from 'util';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  providers: [AuthService]
})

export class SignInComponent  implements OnInit{
  @ViewChild('f') signInForm: NgForm;

  private type="password";
  private hasErrorCredential:boolean = false;
  private isContent:boolean = true;

  constructor (private router: Router, private authService:AuthService) {
  }

  ngOnInit() {
    
  }

  private signIn() {
    this.hasErrorCredential = false;
    let user = new User(this.signInForm.value);
    this.authService.signin(user).subscribe(
      result => {
        localStorage.setItem('token', result.data.token);
        localStorage.setItem('user', result.data.user.idCard);
        this.router.navigate(['/dashboard']);
      }, 
      error => {
        let errorMessage = <any>error;
        if( errorMessage.status == 403) this.hasErrorCredential = true;
      }
    );
  }

}
