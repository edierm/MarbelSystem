import { Component, OnInit } from '@angular/core';
import { UsersServices } from 'src/services/users.services';

@Component({
    selector: 'users-cmp',
  
    templateUrl: 'users.component.html',
    styleUrls : ['./users.component.scss']
})

export class UsersComponent implements OnInit{
    users: any[]
    usersClients: any[];
    usersAdmin: any[];
    constructor(private userService: UsersServices) {
    }
    
    ngOnInit() {
        this.userService.getAllUsers().subscribe(({users}) => {            
            this.users = users;
            this.usersClients = users.filter((user) => user.role == 'CLIENT');
            this.usersAdmin = users.filter((user) => user.role == 'ADMIN');
        });
    }
}
