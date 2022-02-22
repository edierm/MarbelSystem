import { Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-sale',
    templateUrl: './sale.component.html',
    styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit{
    product: any;
    SaleForm = this.fb.group({
        name:['',[Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        check: ['',[Validators.required]],
       
        phone:['',[Validators.required, Validators.minLength(3)]],
        adress:['',[Validators.required, Validators.minLength(5)]],
        city:['',[Validators.required, Validators.minLength(5)]],
       
    })
    
    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.product = JSON.parse(localStorage.getItem('selectSale')) || {};
        console.log(this.product);
    }

    sale(){
        // console.log(this.SaleForm.value);
    }
}