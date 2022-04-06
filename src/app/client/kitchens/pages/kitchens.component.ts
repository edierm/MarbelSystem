import { ProductService } from 'src/services/products.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-kitchens',
  templateUrl: './kitchens.component.html',
  styleUrls: ['./kitchens.component.scss'],
})
export class KitchensComponent implements OnInit {
  constructor(private productsService: ProductService, private router: Router, private route: ActivatedRoute) {}
  
  product: any  [];
  name : any ;
  ngOnInit() {
    this.product = JSON.parse(sessionStorage.getItem('dataKitchen'));
    this.productsService.getProductsCategory('COCINAS').subscribe((res) => {
      this.product = res.productsCategory;
      sessionStorage.setItem(
        'dataKitchen',
        JSON.stringify(res.productsCategory)
      );
      console.log('Llego la peticion');
    });
    console.log('Llegue aqui');
  }

  
  redirect(product: any) {
    localStorage.setItem('selectSale', JSON.stringify(product));
    this.router.navigate(['/client/sale'], { relativeTo: this.route });
  }
  SearchKitchens(){
    if(this.name == ""){
        this.ngOnInit();
    }else{
        this.product = this.product.filter(res =>{
            return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
        })
    }
}
}
