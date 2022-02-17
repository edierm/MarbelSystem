import { SaleService } from '../../../../../services/sale.service';

import { BsModalService, ModalDirective } from 'ngx-bootstrap/modal';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, ViewChild, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'addsale-cmp',

  templateUrl: 'addsale.component.html',
  styleUrls: ['./addsale.component.scss'],
})
export class AddSaleComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private saleService: SaleService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: BsModalService
  ) {}
  selectSale = localStorage.getItem('selectSale');
  dataLocal: any;
  isUpdate = false;
  
  ngOnInit(): void {
    if (this.router.url.includes('edit')) {
      this.dataLocal = JSON.parse(localStorage.getItem('selectSale'));
      if (this.dataLocal) {
        this.saleForm.patchValue(this.dataLocal);
        this.isUpdate = true;
      }
    }
    console.log(this.router.url);
  }

  @ViewChild('modalSuccess') public modalRef: ModalDirective;
  saleForm = this.fb.group({
    name: ['', [Validators.required]],
    nameproduct: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    document: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(15)],
    ],
    price: ['', [Validators.required, Validators.minLength(3)]],
    city: ['', [Validators.required, Validators.maxLength(11)]],
    product: ['', [Validators.minLength(1)]],
  });

  dataModal = {
    title: '',
    body: '',
  };
  openModal() {
    this.modalRef.hide();
    this.modalRef.show();
  }

  saveSale() {
    console.log(this.saleForm.value);
    
    const data = this.saleForm.value;
    if (this.isUpdate) {
        Object.assign(data, {_id: this.route.snapshot.params.id})
        console.log(this.route);
        this.saleService.updateSales(data).subscribe((res) => {
            console.log('Actualizada venta', res);
        });
    } else {
      console.log('Data Producto: ', data);
      this.saleService.createSale(data).subscribe((res) => {
        console.log('venta  creada', res);
      });
    }
  }
  printDiv(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}
clicksub() {
  console.log(this.saleForm.value);
  this.saleForm.reset();
}
get name() {
  return this.saleForm.get('name');
}
get nameproduct() {
  return this.saleForm.get('nameproduct');
}
get email() {
  return this.saleForm.get('email');
}
get document() {
  return this.saleForm.get('document');
}
get price() {
  return this.saleForm.get('price');
}
get city() {
  return this.saleForm.get('city');
}
get product() {
  return this.saleForm.get('product');
}

}
