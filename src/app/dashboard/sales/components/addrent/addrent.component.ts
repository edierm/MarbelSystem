import { ActivatedRoute, Router } from '@angular/router';
import { RentService } from './../../../../../services/rent.service';

import { BsModalService, ModalDirective } from 'ngx-bootstrap/modal';

import { FormBuilder, Validators } from '@angular/forms';
import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
    selector: 'addrent-cmp',
    
    templateUrl: 'addrent.component.html',
    styleUrls : ['./addrent.component.scss']
})

export class AddRentComponent implements OnInit{
    constructor(
        private fb: FormBuilder,
        private rentService : RentService,
        private router: Router,
        private route: ActivatedRoute,
        private modalService: BsModalService
    ){}
    selectRent = localStorage.getItem('selectRent');
  dataLocal: any;
  isUpdate = false;
  
  ngOnInit(): void {
    if (this.router.url.includes('edit')) {
      this.dataLocal = JSON.parse(localStorage.getItem('selectRent'));
      if (this.dataLocal) {
        this.rentForm.patchValue(this.dataLocal);
        this.isUpdate = true;
      }
    }
    console.log(this.router.url);
  }

    @ViewChild('modalSuccess') public modalRef: ModalDirective;
    rentForm = this.fb.group({
        name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    document: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(15)],],
    rent: ['', [Validators.required, Validators.minLength(3)]],
    city: ['', [Validators.required, Validators.maxLength(11)]],
    product: ['', [Validators.required, Validators.minLength(3)]],
    price: ['', [Validators.required, Validators.minLength(3)]],


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
        console.log(this.rentForm.value);
        
        const data = this.rentForm.value;
        if (this.isUpdate) {
            Object.assign(data, {_id: this.route.snapshot.params.id})
            console.log(this.route);
            this.rentService.updateRent(data).subscribe((res) => {
                console.log('Actualizado abono', res);
                this.dataModal.title = 'Abono Actualizado';
                this.dataModal.body = 'Exito';
                this.openModal();
              }, (error) => {
                this.dataModal.title = 'Error';
                this.dataModal.body = 'No se pudo crear el producto';
                this.openModal();
            });
        } else {
          console.log('Data Producto: ', data);
          this.rentService.createRent(data).subscribe((res) => {
            console.log('Credito  producto', res);
            this.dataModal.title = 'Abono Creado';
            this.dataModal.body = 'Exito';
            this.openModal();
          }, (error) => {
            this.dataModal.title = 'Error';
            this.dataModal.body = 'No se pudo crear el Abono';
            this.openModal();
          });
        }
      }

      clicksub() {
        console.log(this.rentForm.value);
        this.rentForm.reset();
      }
      get name() {
        return this.rentForm.get('name');
      }
      get email() {
        return this.rentForm.get('email');
      }
      get document() {
        return this.rentForm.get('document');
      }
      get rent() {
        return this.rentForm.get('rent');
      }
      get price() {
        return this.rentForm.get('price');
      }
      get city() {
        return this.rentForm.get('city');
      }
      get product() {
        return this.rentForm.get('product');
      }
}