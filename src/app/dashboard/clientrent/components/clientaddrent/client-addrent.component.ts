import { RentService } from './../../../../../services/rent.service';
import { Validators, FormBuilder } from '@angular/forms';
import { ModalDirective, BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'client-addrent-cmp',
    
    templateUrl: 'client-addrent.component.html',
    styleUrls : ['./client-addrent.component.scss']
})

export class ClientAddRentComponent  implements OnInit{
   
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
        this.addRentForm.patchValue(this.dataLocal);
        this.isUpdate = true;
      }
    }
    console.log(this.router.url);
  }

    @ViewChild('modalSuccess') public modalRef: ModalDirective;
    imageSrc: string = '';
    addRentForm = this.fb.group({
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
        console.log(this.addRentForm.value);
        
        const data = this.addRentForm.value;
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
}