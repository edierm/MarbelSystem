import { ProductService } from './../../../../services/products.service';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-bathrooms',
    templateUrl: './bathrooms.component.html',
    styleUrls: ['./bathrooms.component.scss']
})
export class BathroomsComponent implements OnInit {
    constructor(private productsService: ProductService) {}
    productos: [];
    ngOnInit() {
        this.productos = JSON.parse(sessionStorage.getItem('dataBathrooms'));
        this.productsService.getProductsCategory('Baños').subscribe((res) => {
            this.productos = res.productsCategory;
            sessionStorage.setItem(
             'dataBathrooms',
        JSON.stringify(res.productsCategory)
        );
    });
  }
}