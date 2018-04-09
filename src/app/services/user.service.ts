import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { User } from '../models/user';

import 'rxjs/add/operator/map';


@Injectable()

export class UserService {
  public url:string;
  private headers;
  private options;

  constructor(private http:Http) {
    this.url = environment.apiUrl + "/users";
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    this.headers.append('Authorization', `${localStorage.getItem('token')}`);
    this.options = new RequestOptions({headers: this.headers});
  }

  public index() {
    return this.http.get(this.url, this.options)
      .map( res => res.json());
  }

  public show(idCard:string) {
    return this.http.get(this.url + '/' + idCard, this.options)
      .map( res => res.json());
  }

  public store(user:User) {
    return this.http.post(this.url, user, this.options)
      .map( res => res.json());
  }

  public delete(idCard:string) {
    return this.http.delete(this.url + '/' + idCard, this.options)
      .map( res => res.json());
  }

}
