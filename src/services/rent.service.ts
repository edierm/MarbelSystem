import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RentService {
  constructor(private http: HttpClient) {}
  createRent(rent: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
    return this.http.post(environment.apis.apiRent, rent, { headers });
  }
  getAllRents(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
    return this.http.get(environment.apis.apiRent, { headers });
  }
  updateRent(rent: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
    return this.http.post(environment.apis.apiRentUpdate, rent, { headers });
  }
  rentsByUser(email: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
    const url = `${environment.apis.apiRentsByUser}?email=${email}`;
    return this.http.get(url, { headers });
  }
  deleteRent(rentId: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
    const url = `${environment.apis.apiRentDelete}/${rentId} `;
    return this.http.get(url, {
      headers,
    });
  }
}
