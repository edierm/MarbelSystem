
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class UsersServices{
    constructor(private http: HttpClient) { }
    login( user:any ):Observable<any>{
        const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
        return  this.http.post(environment.apis.userLogin, user , {headers}  )
      
        
    }
    createUser (user: any): Observable<any> {
        const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
        return  this.http.post(environment.apis.apiUsers, user ,{headers}  )
    }
    createClient (user: any): Observable<any> {
        const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
        return  this.http.post(environment.apis.apiReg, user ,{headers}  )
    }
}

//si no me suscribo al observable nunca va ir al backend//