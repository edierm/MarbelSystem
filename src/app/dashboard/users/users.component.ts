import { UsersService } from './../../../services/users.service';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'users-cmp',
  
    templateUrl: 'users.component.html',
    styleUrls : ['./users.component.scss']
})

export class UsersComponent implements OnInit{
    users: any[]
    usersClients: any[];
    usersAdmin: any[];
    constructor(private userService: UsersService) {
    }
    
    ngOnInit() {
        this.userService.getAllUsers().subscribe(({users}) => {            
            this.users = users;
            this.usersClients = users.filter((user) => user.role == 'CLIENT');
            this.usersAdmin = users.filter((user) => user.role == 'ADMIN');
        });
    }
}
