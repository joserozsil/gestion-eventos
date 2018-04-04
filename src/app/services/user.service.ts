import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { User } from '../models/user';

import 'rxjs/add/operator/map';


@Injectable()

export class UserService {
  public url:string;

  constructor(private http:Http) {
    this.url = environment.apiUrl + "/users"
  }

  public index() {
    return this.http.get(this.url)
      .map( res => res.json());
  }

  public show(idCard:string) {
    return this.http.get(this.url + '/' + idCard)
      .map( res => res.json());
  }

  public store(user:User) {
    return this.http.post(this.url, user)
      .map( res => res.json());
  }

  public delete(idCard:string) {
    return this.http.delete(this.url + '/' + idCard)
      .map( res => res.json());
  }

}
