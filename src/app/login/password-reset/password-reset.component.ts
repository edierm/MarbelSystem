import { ModalDirective } from 'ngx-bootstrap/modal';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from './../../../services/users.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss'],
})
export class PasswordResetComponent implements OnInit{
  validPassword = false;
  dataUrl: any;

  @ViewChild('modalSuccess') public modalRef: ModalDirective;
  resetForm = this.fb.group({
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]]
  });

  dataLocal:any;
  constructor(
    private fb: FormBuilder,
    private userservices: UsersService,
    private route: ActivatedRoute,
    private router: Router
    ) {}


  ngOnInit() {
     this.route.params.subscribe(data=> {
       this.dataUrl = data;
     });
  }

  dataModal = {
    title: '',
    body: '',
  };

  openModal() {
    this.modalRef.hide();
    this.modalRef.show();
  }
  reset() {
    console.log(this.resetForm.value);
    const { password, confirmPassword} = this.resetForm.value;
    if(password === confirmPassword) {
      const {userId, token} = this.dataUrl;
      this.userservices.reset(userId, token, {password: this.resetForm.value.password}).subscribe((res) => {
        console.log(res);
        this.router.navigateByUrl('/login');
        this.dataModal.title = 'Revisa tu correo';
        this.dataModal.body = 'Se envio un correo electronico con un cambio link de cambio de estado';
        this.openModal();
      }, (error) => { 
      this.dataModal.title = 'Error';
      this.dataModal.body = 'No se pudo Actualizar la contraseña';
      this.openModal();
    });
  }
}

  keyUpPassword(e) {
    const { password, confirmPassword} = this.resetForm.value;
    if(password === confirmPassword) {
      this.validPassword = false;
    }else {
      this.validPassword = true;
    }
  }
}
