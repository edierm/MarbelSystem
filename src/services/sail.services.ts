import { environment } from './../environments/environment';
import { Observable } from 'rxjs';

/* aca no se que hacer mani */
import { HttpSail, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})

export class SailService{
    constructor(private http: HttpSail ) {}
    createSail (sail:any) :Observable<any>{
        const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'})
        return this.http.post(environment.apis.apiSail, sail, {headers} )
    }
}