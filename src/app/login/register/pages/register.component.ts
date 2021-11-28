import { UsersServices } from './../../../../services/users.services';
import { FormBuilder, Validators } from '@angular/forms';
import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef, ModalDirective } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
    constructor(
        private fb: FormBuilder,
        private usersService: UsersServices,
        private modalService: BsModalService
      ) {}
      
    @ViewChild('modalSuccess') public modalRef: ModalDirective;
    RegisterForm = this.fb.group({
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        document: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(15)],],
        password: ['', [Validators.required, Validators.minLength(3)]],
        phone: ['', [Validators.required, Validators.maxLength(11)]],
        address: ['', [Validators.minLength(3)]],
        role: ['', [Validators.required]],
        city: ['', [Validators.required]],

    })
    dataModal = {
        title: '',
        body: ''
    };
    openModal() {
      this.modalRef.hide();
      this.modalRef.show();
    }
  
    saveClient() {  
      console.log(this.RegisterForm);
      this.usersService.createClient(this.RegisterForm.value).subscribe((res) => {
          console.log('Respuesta del back: ', res);
          this.dataModal.title = 'Usuario agregado';
          this.dataModal.body = 'El usuario ha sido agregado con exito.';
          this.openModal();
      }, ({error})=> {
          console.log(error);
          this.dataModal.title = 'Error';
          this.dataModal.body = error.errorMessage;
          this.openModal();
      });
    }
  
   

}