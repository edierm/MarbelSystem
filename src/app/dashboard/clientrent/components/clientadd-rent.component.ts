import { RentService } from './../../../../services/rent.service';
import { ActivatedRoute, Router } from '@angular/router';

import { BsModalService, ModalDirective } from 'ngx-bootstrap/modal';

import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'clientadd-rent-cmp',

  templateUrl: 'clientadd-rent.component.html',
  styleUrls: ['./clientadd-rent.component.scss'],
})
export class ClientAddRentComponent implements OnInit{
    constructor(
        private fb: FormBuilder,
        private rentService : RentService,
        private router: Router,
        private route: ActivatedRoute,
        private modalService: BsModalService
    ){}
    selectRent = localStorage.getItem('selectRent');
    
    isUpdate = false;
    rent: any ;

    @ViewChild('modalSuccess') public modalRef: ModalDirective;
    imageSrc: string = '';
    cAddRentForm: FormGroup;

    dataModal = {
      title: '',
      body: ''
  };

  
  ngOnInit(): void {
      let dataLocal = JSON.parse(localStorage.getItem('userLogin'));
      this.cAddRentForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      document: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(15)],],
      rent: ['', [Validators.required, Validators.minLength(3)]],
      city: ['', [Validators.required, Validators.maxLength(11)]],
      product: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.minLength(3)]],
      imageSrc:['',[Validators.required]],

    });
    if (dataLocal){
      this.cAddRentForm.patchValue(dataLocal);
    }
    if (this.router.url.includes('edit')){
      dataLocal = JSON.parse(localStorage.getItem('selectRent'));
      if(dataLocal){
        this.cAddRentForm.patchValue(dataLocal);
        this.isUpdate = true;
      }
    }
  }
        
  openModal() {
  this.modalRef.hide();
  this.modalRef.show();
  }
  saveRent() {
        console.log(this.cAddRentForm.value);
        
        const data = this.cAddRentForm.value;
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
                this.dataModal.body = 'No se pudo Actualizar el Abono';
                this.openModal();
            });
        } else {
          console.log('Data Producto: ', data);
          this.rentService.createRent(data).subscribe((res) => {
            console.log('Credito  producto', res);
            this.dataModal.title = 'Credito Creado';
            this.dataModal.body = 'Exito';
            this.openModal();
          }, (error) => {
            this.dataModal.title = 'Error';
            this.dataModal.body = 'No se pudo crear el Credito';
            this.openModal();
          
          });
        }
      }
      handleInputChangeImg(e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();
        if (!file.type.match(pattern)) {
          alert('invalid format');
          return;
        }
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
      }
    
      _handleReaderLoaded(e) {
        let reader = e.target;
        this.imageSrc = reader.result;
        console.log(this.imageSrc);
      }

      clicksub() {
        console.log(this.cAddRentForm.value);
        this.cAddRentForm.reset();
      }
      get name() {
        return this.cAddRentForm.get('name');
      }
      get email() {
        return this.cAddRentForm.get('email');
      }
      get document() {
        return this.cAddRentForm.get('document');
      }
   
      get city() {
        return this.cAddRentForm.get('city');
      }
      get product() {
        return this.cAddRentForm.get('product');
      }
      get price() {
        return this.cAddRentForm.get('price');
      }

}
