import { RentService } from './../../../services/rent.service';
import { SaleService } from './../../../services/sale.service';

import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';




@Component({
    selector: 'sales-cmp',

    templateUrl: 'sales.component.html',
    styleUrls : ['./sales.component.scss']
})

export class SalesComponent  implements OnInit{
    sales: any[];
    rents: any[];
    name: any

    constructor(private saleService: SaleService, private router: Router, private rentService: RentService) {
    }
    
    ngOnInit() {
        this.saleService.getAllSales().subscribe(({sales}) => {            
            this.sales = sales;
            
        
        });
        this.rentService.getAllRents().subscribe(({rents}) => {
            this.rents = rents;
        });
    }

    editSale(sale) {
        localStorage.setItem('selectSale', JSON.stringify(sale));
        this.router.navigate([`/dashboard/sales/edit/${sale._id}`]);
    }

    editRent(rent) {
        localStorage.setItem('selectRent', JSON.stringify(rent));
        this.router.navigate([`/dashboard/rent/edit/${rent._id}`]);
    }

    Search(){
        if(this.name == ""){
            this.ngOnInit();
        }else{
            this.sales = this.sales.filter(res =>{
                return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
            })
        }
    }

    SearchRents(){
        if(this.name == ""){
            this.ngOnInit();
        }else{
            this.rents = this.rents.filter(res =>{
                return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
            })
        }
    }
    
}
