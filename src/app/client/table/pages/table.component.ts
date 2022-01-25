import { ProductService } from './../../../../services/products.service';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
    constructor(private productsService: ProductService) {}
    productos: [];
    ngOnInit() {
      this.productos = JSON.parse(sessionStorage.getItem('dataTable'));
      this.productsService.getProductsCategory('Mesones').subscribe((res) => {
        this.productos = res.productsCategory;
        sessionStorage.setItem(
          'dataTable',
          JSON.stringify(res.productsCategory)
        );
      });
    }
  }