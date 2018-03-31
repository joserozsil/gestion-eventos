import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  public url:string;

  constructor(private _http:Http) {
    this.url = environment.apiUrl + "/users"
   }

  show() {
    return this._http.get(this.url)
      .map( res => res.json());
  }

}
