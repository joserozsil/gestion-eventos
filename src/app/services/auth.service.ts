import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

import 'rxjs/add/operator/map';

import { Credential } from '../models/credential';

@Injectable()

export class AuthService {
    public url:string;
    
    constructor(private http:Http) {
      this.url = environment.apiUrl + "/signin";
    }

    public signin(credential:Credential) {
        return this.http.post(this.url, credential)
          .map( res => res.json());
      }
}
