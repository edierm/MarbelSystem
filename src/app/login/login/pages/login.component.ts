import { UsersService } from './../../../../services/users.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(3)]],
  });
  constructor(
    private fb: FormBuilder,
    private userservices: UsersService,
    private router: Router
  ) {}

  loguear() {
    console.log(this.loginForm.value);
    this.userservices.login(this.loginForm.value).subscribe(
      (res) => {
        const {ok, user} = res;
        if(ok) {
            localStorage.setItem('userLogin', JSON.stringify(user));
            this.router.navigate(['/dashboard']);
        }
        console.log(res);
      },
      (error) => {
        this.router.navigate(['/dashboard']);
        localStorage.setItem('userLogin', null);
      }
    );
  }
}
