import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../../../../services/products.service';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
    constructor(
      private productsService: ProductService,
      private router: Router,
      private route: ActivatedRoute
      ) {}
    productos:any [];
    name:any ;
    promo: any;
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
    redirect(product: any) {
      localStorage.setItem('selectSale', JSON.stringify(product));
      this.router.navigate(['/client/sale'], { relativeTo: this.route });
    }

    SearchTables(){
      if(this.name == ""){
          this.ngOnInit();
      }else{
          this.productos = this.productos.filter(res =>{
              return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
          })
      }
  }

  SearchTablesPromo(){
    if(this.promo == "" ){
        this.ngOnInit();
    }else{
        this.productos = this.productos.filter(res =>{
          return res.promo.match(this.promo);

        })
    }
  }
  }