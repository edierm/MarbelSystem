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
  
  createValue(ventas: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
    return this.http.post(environment.apis.apiSale, ventas, { headers });
  }

  getAllValue(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
    return this.http.get(environment.apis.apiSale, { headers });
  }

  

  valueByUser(email: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
    const url = `${environment.apis.apiSalesByUser}?email=${email}`;
    return this.http.get(url, { headers });
  }
}
