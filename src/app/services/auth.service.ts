import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

import 'rxjs/add/operator/map';

import { Credential } from '../models/credential';

@Injectable()

export class AuthService {
    public url:string;
    private headers;
    private options;
    
    constructor(private http:Http) {
      this.url = environment.apiUrl + "/signin";
      this.headers = new Headers();
			
			this.options = new RequestOptions({ headers: this.headers });
    }

    public signin(credential:Credential) {
        return this.http.post(this.url, credential, this.options)
          .map( res => res.json());
      }
}
