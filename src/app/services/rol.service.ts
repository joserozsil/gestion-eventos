import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { Rol } from '../models/rol';

import 'rxjs/add/operator/map';


@Injectable()

export class RolService {
  public url:string;
  private headers;
  private options;

  constructor(private http:Http, private router:Router) {
    this.url = environment.apiUrl + "/rols";
    this.headers = new Headers();
    let token = localStorage.getItem('token')
    
    if ( token ) {
      this.headers.append('Authorization', `${token}`);
      this.options = new RequestOptions({headers: this.headers});
    } else {
      this.router.navigate(['/auth/action/signin']);
    }

  }

  public index() {
    return this.http.get(this.url, this.options)
      .map( res => res.json());
  }

  public show(id:string) {
    return this.http.get(this.url + '/' + id, this.options)
      .map( res => res.json());
  }

  public store(rol:Rol) {
    return this.http.post(this.url, rol, this.options)
      .map( res => res.json());
  }

  public delete(id:string) {
    return this.http.delete(this.url + '/' + id, this.options)
      .map( res => res.json());
  }

}
