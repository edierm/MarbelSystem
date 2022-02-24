import { ValueService } from './../../../../services/value.service';
import { ActivatedRoute, Router } from '@angular/router';

import { BsModalService, ModalDirective } from 'ngx-bootstrap/modal';

import { FormBuilder, Validators } from '@angular/forms';
import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'value-add-cmp',

  templateUrl: 'value-add.component.html',
  styleUrls: ['./value-add.component.scss'],
})
export class ValueAddComponent implements OnInit{
    
    constructor(
        private fb: FormBuilder,
        private valueService : ValueService,
        private router: Router,
        private route: ActivatedRoute,
        private modalService: BsModalService
    ){}
    selectValue = localStorage.getItem('selectValue');
  dataLocal: any;
  isUpdate = false;
  
  ngOnInit(): void {
    if (this.router.url.includes('edit')) {
      this.dataLocal = JSON.parse(localStorage.getItem('selectValue'));
      if (this.dataLocal) {
        this.valueAddForm.patchValue(this.dataLocal);
        this.isUpdate = true;
      }
    }
    console.log(this.router.url);
  }

    @ViewChild('modalSuccess') public modalRef: ModalDirective;
    imageSrc: string = '';
    valueAddForm = this.fb.group({
        name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(15)],],
    addres: ['', [Validators.required, Validators.minLength(3)]],
    city: ['', [Validators.required, Validators.minLength(3)]],
    product: ['', [Validators.required, Validators.minLength(3)]],
    color: ['', [Validators.required, Validators.minLength(3)]],
    material: ['', [Validators.required, Validators.minLength(3)]],
    size: ['', [Validators.required, Validators.minLength(3)]],
    shipped: ['', [Validators.minLength(3)]],    




    });
    


    dataModal = {
        title: '',
        body: ''
    };
    openModal() {
      this.modalRef.hide();
      this.modalRef.show();
    }
    saveValue() {
        console.log(this.valueAddForm.value);
        
        const data = this.valueAddForm.value;
        if (this.isUpdate) {
            Object.assign(data, {_id: this.route.snapshot.params.id})
            console.log(this.route);
            this.valueService.createValue(data).subscribe((res) => {
                console.log('Actualizado abono', res);
                this.dataModal.title = 'Cotizacion Actualizada';
                this.dataModal.body = 'Exito';
                this.openModal();
              }, (error) => {
                this.dataModal.title = 'Error';
                this.dataModal.body = 'No se pudo actualizar la cotizacion';
                this.openModal();
            });
        } else {
          console.log('Data Producto: ', data);
          this.valueService.createValue(data).subscribe((res) => {
            console.log('Credito  producto', res);
            this.dataModal.title = 'Cotizacion Creada';
            this.dataModal.body = 'Exito';
            this.openModal();
          }, (error) => {
            this.dataModal.title = 'Error';
            this.dataModal.body = 'No se pudo crear la cotizacion ';
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
        console.log(this.valueAddForm.value);
        this.valueAddForm.reset();
      }
      get name() {
        return this.valueAddForm.get('name');
      }
      get email() {
        return this.valueAddForm.get('email');
      }
      get phone() {
        return this.valueAddForm.get('phone');
      }
      get addres() {
        return this.valueAddForm.get('addres');
      }
      get city() {
        return this.valueAddForm.get('city');
      }
      get product() {
        return this.valueAddForm.get('product');
      }
      get color() {
        return this.valueAddForm.get('color');
      }
      get material() {
        return this.valueAddForm.get('material');
      }
      get size(){
        return this.valueAddForm.get('size');
      }
}
