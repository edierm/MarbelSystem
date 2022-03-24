import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}
  login(user: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
    return this.http.post(environment.apis.userLogin, user, { headers });
  }
  createUser(user: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
    return this.http.post(environment.apis.apiUsers, user, { headers });
  }
  createClient(user: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
    return this.http.post(environment.apis.apiReg, user, { headers });
  
  }
  sendEmail(user: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
    return this.http.post(environment.apis.apiUsersEmail, user, { headers });
  }
  getAllUsers(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
    return this.http.get(environment.apis.apiUsers, { headers });
  }
  updateClient(user: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
    return this.http.post(environment.apis.apiUsersUpdate, user, { headers });
  }
  deleteUser(userId: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
    const url = `${environment.apis.apiUsersDelete}/${userId} `;
    return this.http.get(url, {
      headers,
    });
  }
  forgot(user: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
    return this.http.post(environment.apis.userForgot, user, { headers });
  }
  reset(userId: any, token: string, body: {}): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
    const url = `${environment.apis.userReset}/${userId}/${token}`
    return this.http.post(url, body, { headers });
  }
}

//si no me suscribo al observable nunca va ir al backend//
