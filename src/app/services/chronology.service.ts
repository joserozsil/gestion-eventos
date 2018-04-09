import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { Chronology } from '../models/chronology';

import 'rxjs/add/operator/map';


@Injectable()

export class ChronologyService {
  public url:string;
  private headers;
  private options;

  constructor(private http:Http) {
    this.url = environment.apiUrl + "/chronologies";
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json; charset=UTF-8');
    this.headers.append('Authorization', `${localStorage.getItem('token')}`);
    this.options = new RequestOptions({ headers: this.headers });
  }

  public index() {
    return this.http.get(this.url, this.options)
      .map( res => res.json());
  }

  public show(idChronology:string) {
    return this.http.get(this.url + '/' + idChronology, this.options)
      .map( res => res.json());
  }

  public store(chronology:Chronology) {
    return this.http.post(this.url, chronology, this.options)
      .map( res => res.json());
  }

	public update(idChronology:string) {
			return this.http.put(this.url + '/' + idChronology, this.options)
			.map( res => res.json());
	}

  public delete(idChronology:string) {
    return this.http.delete(this.url + '/' + idChronology, this.options)
      .map( res => res.json());
  }

}
