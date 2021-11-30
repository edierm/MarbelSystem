import { RentService } from './../../../../../services/rent.service';

import { BsModalService, ModalDirective } from 'ngx-bootstrap/modal';

import { FormBuilder, Validators } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'addrent-cmp',
    
    templateUrl: 'addrent.component.html',
    styleUrls : ['./addrent.component.scss']
})

export class AddRentComponent{
    constructor(
        private fb: FormBuilder,
        private rentService : RentService,
        private modalService: BsModalService
    ){}

    @ViewChild('modalSuccess') public modalRef: ModalDirective;
    rentForm = this.fb.group({
        name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    document: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(15)],],
    rent: ['', [Validators.required, Validators.minLength(3)]],
    city: ['', [Validators.required, Validators.maxLength(11)]],
    product: ['', [Validators.minLength(3)]],


    });


    dataModal = {
        title: '',
        body: ''
    };
    openModal() {
      this.modalRef.hide();
      this.modalRef.show();
    }
  
    saveRent() {  
      console.log(this.rentForm);
      this.rentService.createRent(this.rentForm.value).subscribe((res) => {
          console.log('Respuesta del back: ', res);
          this.dataModal.title = 'Abono realizado';
          this.dataModal.body = 'El abono ha sido agregado con exito.';
          this.openModal();
      }, ({error})=> {
          console.log(error);
          this.dataModal.title = 'Error';
          this.dataModal.body = error.errorMessage;
          this.openModal();
      });
    }

}