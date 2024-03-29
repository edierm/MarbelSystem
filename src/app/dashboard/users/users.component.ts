import { filter } from 'rxjs/operators';
import { UsersService } from './../../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'users-cmp',

  templateUrl: 'users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: any[];
  name: any;
  usersClients: any[];
  usersAdmin: any[];

  private finishPage = 5;
  private actualPage: number;
  constructor(private userService: UsersService, private router: Router) {
    this.actualPage = 1;
  }

  ngOnInit() {
    this.getAllUsers();

    this.infiniti();
  }
  updateClient(user) {
    localStorage.setItem('selectClient', JSON.stringify(user));
    this.router.navigate([`/dashboard/user/edit/${user._id}`]);
  }
  SearchClient() {
    if (this.name == '') {
      this.ngOnInit();
    } else {
      this.usersClients = this.usersClients.filter((res) => {
        return res.name
          .toLocaleLowerCase()
          .match(this.name.toLocaleLowerCase());
      });
    }
  }
  SearchAdmin() {
    if (this.name == '') {
      this.ngOnInit();
    } else {
      this.usersAdmin = this.usersAdmin.filter((res) => {
        return res.name
          .toLocaleLowerCase()
          .match(this.name.toLocaleLowerCase());
      });
    }
  }
  deleteUser(user) {
    this.userService.deleteUser(user._id).subscribe((res) => {
      console.log('Usuario borrado', res);
      this.getAllUsers();
    });
  }
  getAllUsers() {
    this.userService.getAllUsers().subscribe(({ users }) => {
      this.users = users.map((user) => ({ ...user }));
      this.usersClients = users.filter((user) => user.role == 'CLIENT');
      this.usersAdmin = users.filter((user) => user.role == 'ADMIN');
    });
  }
  activeChange(user, e) {
    console.log(user, e.target.checked);
    const auxUser = { ...user, active: e.target.checked };
    this.userService.updateClient(auxUser).subscribe((res) => {
      if (res.ok) {
        this.getAllUsers();
      }
    });
  }

  infiniti() {
    const user = 'Another new line --';
    let lineCounter = this.usersClients.length;
    for (let i = 0; i < 7; i++) {
      this.usersClients.push(user + lineCounter);
      lineCounter++;
    }
  }

  onScroll() {
    if (this.actualPage < this.finishPage) {
      this.infiniti();
      this.actualPage++;
    } else {
      console.log('No more lines. Finish page!');
    }
  }
}
