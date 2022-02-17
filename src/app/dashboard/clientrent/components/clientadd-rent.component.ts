import { RentService } from './../../../../services/rent.service';
import { ActivatedRoute, Router } from '@angular/router';

import { BsModalService, ModalDirective } from 'ngx-bootstrap/modal';

import { FormBuilder, Validators } from '@angular/forms';
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
  dataLocal: any;
  isUpdate = false;
  
  ngOnInit(): void {
    if (this.router.url.includes('edit')) {
      this.dataLocal = JSON.parse(localStorage.getItem('selectRent'));
      if (this.dataLocal) {
        this.cAddRentForm.patchValue(this.dataLocal);
        this.isUpdate = true;
      }
    }
    console.log(this.router.url);
  }

    @ViewChild('modalSuccess') public modalRef: ModalDirective;
    imageSrc: string = '';
    cAddRentForm = this.fb.group({
        name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    document: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(15)],],
    rent: ['', [Validators.required, Validators.minLength(3)]],
    city: ['', [Validators.required, Validators.maxLength(11)]],
    product: ['', [Validators.required, Validators.minLength(3)]],
    price: ['', [Validators.required, Validators.minLength(3)]],
    imageSrc:['',[Validators.required]]

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
        console.log(this.cAddRentForm.value);
        
        const data = this.cAddRentForm.value;
        if (this.isUpdate) {
            Object.assign(data, {_id: this.route.snapshot.params.id})
            console.log(this.route);
            this.rentService.updateRent(data).subscribe((res) => {
                console.log('Actualizado abono', res);
            });
        } else {
          console.log('Data Producto: ', data);
          this.rentService.createRent(data).subscribe((res) => {
            console.log('Credito  producto', res);
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
      get rent() {
        return this.cAddRentForm.get('rent');
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
