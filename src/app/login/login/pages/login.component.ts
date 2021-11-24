import { Router } from '@angular/router';
import { environment } from './../../../../environments/environment';
import { UsersServices } from './../../../../services/users.services';
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
    private userservices: UsersServices,
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
        window.location.href = environment.urlDashborad;
        localStorage.setItem('userLogin', null);
      }
    );
  }
}
