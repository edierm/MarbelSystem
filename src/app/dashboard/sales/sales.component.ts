import { SaleService } from './../../../services/sale.service';

import { Component, OnInit } from '@angular/core';



@Component({
    selector: 'sales-cmp',

    templateUrl: 'sales.component.html',
    styleUrls : ['./sales.component.scss']
})

export class SalesComponent  implements OnInit{
    sales: any[];
    salesRents: any[]

    constructor(private saleService: SaleService) {
    }
    
    ngOnInit() {
        this.saleService.getAllSales().subscribe(({sales}) => {            
            this.sales = sales;
            this.salesRents = sales;
        
        });
    }
    
}
