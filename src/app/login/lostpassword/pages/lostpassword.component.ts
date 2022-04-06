import { ActivatedRoute, Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { UsersService } from './../../../../services/users.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lost',
  templateUrl: './lostpassword.component.html',
  styleUrls: ['./lostpassword.component.scss'],
})
export class LostComponent {

  @ViewChild('modalSuccess') public modalRef: ModalDirective;
  lostForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });
  constructor(private fb: FormBuilder, private userservices: UsersService,   private route: ActivatedRoute,
    private router: Router) {}

    dataModal = {
      title: '',
      body: '',
    };
  
    openModal() {
      this.modalRef.hide();
      this.modalRef.show();
    }
  lost() {
    console.log(this.lostForm.value);
    this.userservices.forgot(this.lostForm.value).subscribe((res) => {
      console.log(res);
      this.dataModal.title = 'Se ha enviado un correo';
      this.dataModal.body = 'Revisa tu correo y dale click en el link';
      this.openModal();
      
    }, (error) => {
      this.dataModal.title = 'Se ha enviado un correo';
      this.dataModal.body = 'Revisa tu correo y dale click en el link ';
      this.openModal();
      });
  }
}
