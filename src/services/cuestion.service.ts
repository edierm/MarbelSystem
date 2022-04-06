import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CuestionService {
  constructor(private http: HttpClient) {}
  newCuestion(product: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
    return this.http.post(environment.apis.apiProducts, product, { headers });
  }


  getCuestions(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
    return this.http.get(environment.apis.apiProducts, { headers });
  }

  
  deleteCuestion(productId: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
    const url = `${environment.apis.apiProductDelete}/${productId} `
    return this.http.get(url, {
      headers,
    });

  }
}
