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
  productos = [];
  ngOnInit() {
    this.productos = JSON.parse(sessionStorage.getItem('dataKitchen'));
    this.productsService.getProductsCategory('Cocinas').subscribe((res) => {
      this.productos = res.productsCategory;
      sessionStorage.setItem(
        'dataKitchen',
        JSON.stringify(res.productsCategory)
      );
    });
  }

  
  redirect(product: any) {
    localStorage.setItem('selectSale', JSON.stringify(product));
    this.router.navigate(['/client/sale'], { relativeTo: this.route });
  }
}
