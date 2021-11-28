import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from './../environments/environment.prod';
import { HttpRent,HttpHeaders } from '@angular/common/http';



@Injectable({
    providedIn: 'root'
})

export class RentService{
    constructor(private http: HttpRent ) {}
    createRent (rent:any) :Observable<any>{
        const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'})
        return this.http.post(environment.apis.apiRent, rent, {headers} )
    }
}