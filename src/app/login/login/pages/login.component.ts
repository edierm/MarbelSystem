import { ModalDirective } from 'ngx-bootstrap/modal';
import { UsersService } from './../../../../services/users.service';
import { Router } from '@angular/router';
import { environment } from './../../../../environments/environment';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  @ViewChild('modalSuccess') public modal: ModalDirective;
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(3)]],
  });
  dataModal = {
    title: '',
    body: '',
  };
  openModal() {
    this.modal.hide();
    this.modal.show();
  }

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
        console.log('Respuesta del back',res);

      },
      (error) => {
        /* window.location.href = environment.urlDashborad; */
        localStorage.setItem('userLogin', null);
      
        this.dataModal.title = 'ERROR';
        this.dataModal.body = 'Correo o contraseña invalidos';
        this.openModal();
      }
    );
  }
}
