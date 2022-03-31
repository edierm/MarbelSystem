import { NavbarComponent } from './../../dashboard/shared/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { Component, NgModule, OnInit } from '@angular/core';


@Component({
    selector: 'app-help',
    templateUrl: './help.component.html',
    styleUrls: ['./help.component.scss'],
})

export class HelpComponent implements OnInit  {

    constructor(
    private router: Router,
    private route: ActivatedRoute
    ){}
    name : any ;
    login: any;
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

    SearchHelp(){
        if(this.name == "" ){
            this.ngOnInit();
        }else{
            this.login = this.login.filter(res =>{
                return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
            })
        }
    }
    
}



