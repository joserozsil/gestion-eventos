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

export class SignInComponent  implements OnInit {
  //@ViewChild('f') createUserForm: NgForm;

  private type="password";

  constructor (private router: Router) {
  }

  ngOnInit() {
    
  }

}
