import { UsersService } from './../../../../services/users.service';
import { FormBuilder, Validators } from '@angular/forms';
import {
  AfterViewInit,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import {
  ModalDirective
} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(
    private fb: FormBuilder,
    private usersService: UsersService
  ) {}

  // @ViewChild(ModalDirective, { static: false }) modal?: ModalDirective;
  @ViewChild('modalSuccess') public modal: ModalDirective;
  RegisterForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    document: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)],],
    password: ['', [Validators.required, Validators.minLength(3)]],
    phone: ['', [Validators.required, Validators.maxLength(11)]],
    address: ['', [Validators.required, Validators.minLength(3)]],
    role: ['', [Validators.required]],
    city: ['', [Validators.required]],
  });
  dataModal = {
    title: '',
    body: '',
  };
  openModal() {
    this.modal.hide();
    this.modal.show();
  }

  saveClient() {
    console.log(this.RegisterForm);
    this.usersService.createClient(this.RegisterForm.value).subscribe(
      (res) => {
        console.log('Respuesta del back: ', res);
        this.dataModal.title = 'Usuario agregado';
        this.dataModal.body = 'El usuario ha sido agregado con exito.';
        this.openModal();
      },
      ({ error }) => {
        console.log(error);
        this.dataModal.title = 'Error';
        this.dataModal.body = error.errorMessage;
        this.openModal();
      }
    );
  }
  get name() {
    return this.RegisterForm.get('name');
  }
  get email() {
    return this.RegisterForm.get('email');
  }
  get document() {
    return this.RegisterForm.get('document');
  }
  get password() {
    return this.RegisterForm.get('password');
  }
  get phone() {
    return this.RegisterForm.get('phone');
  }
  get address() {
    return this.RegisterForm.get('address');
  }
  get role() {
    return this.RegisterForm.get('role');
  }
  get city() {
    return this.RegisterForm.get('city');
  }
}
