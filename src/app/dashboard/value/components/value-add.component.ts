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
    product: ['', [Validators.minLength(3)]],
    color: ['', [Validators.required, Validators.minLength(3)]],
    material: ['', [Validators.required, Validators.minLength(3)]],
    size: ['', [Validators.required, Validators.minLength(3)]],

      




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
            });
        } else {
          console.log('Data Producto: ', data);
          this.valueService.createValue(data).subscribe((res) => {
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
}
