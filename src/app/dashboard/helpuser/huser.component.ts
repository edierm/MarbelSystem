import { NavbarComponent } from './../../dashboard/shared/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { Component, NgModule, OnInit } from '@angular/core';


@Component({
    selector: 'app-huser',
    templateUrl: './huser.component.html',
    styleUrls: ['./huser.component.scss'],
})

export class HuserComponent implements OnInit  {

    constructor(
    private router: Router,
    private route: ActivatedRoute
    ){}
    name : any ;
    login: any;
    ngOnInit() {
        this.login= this.login
    }

   
}


