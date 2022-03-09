import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../../../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bathrooms',
  templateUrl: './bathrooms.component.html',
  styleUrls: ['./bathrooms.component.scss'],
})
export class BathroomsComponent implements OnInit {
  constructor(
    private productsService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  
  productos: any  [];
  name : any ;
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

  redirect(product: any) {
    localStorage.setItem('selectSale', JSON.stringify(product));
    this.router.navigate(['/client/sale'], { relativeTo: this.route });
  }
  SearchBathrooms(){
    if(this.name == ""){
        this.ngOnInit();
    }else{
        this.productos = this.productos.filter(res =>{
            return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
        })
    }
}
}
