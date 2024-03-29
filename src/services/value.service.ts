import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

/* aca no se que hacer mani */
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValueService {
  constructor(private http: HttpClient) {}
  
  createValue(value: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
    return this.http.post(environment.apis.apiValue ,value, { headers });
  }
  getAllValues(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
    return this.http.get(environment.apis.apiValue, { headers });
  }

  updateValue(rent: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
    return this.http.post(environment.apis.apiValueUpdate, rent, { headers });
  }

  valueByUser(email: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
    const url = `${environment.apis.apiValueByUser}?email=${email}`;
    return this.http.get(url, { headers });
  }
  deleteValue(valueId: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
    const url = `${environment.apis.apiValueDelete}/${valueId} `
    return this.http.get(url, {
      headers,
    });

  }
}
