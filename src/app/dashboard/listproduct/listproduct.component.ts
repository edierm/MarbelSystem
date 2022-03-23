import { ProductService } from 'src/services/products.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'listpro-cmp',
    
    templateUrl: 'listproduct.component.html',
    styleUrls : ['./listproduct.component.scss']
})

export class ListProductComponent implements OnInit{
    
    products: any[];
    name: any
    promo:any
    constructor(private productService: ProductService, private router: Router) {
    }
    ngOnInit() {
        this.getAllProducts(); 
    }
    editProduct(product) {
        localStorage.setItem('selectProduct', JSON.stringify(product));
        this.router.navigate([`/dashboard/product/edit/${product._id}`]);
    }

    Search(){
        if(this.name == ""){
            this.getAllProducts();
        }else{
            this.products = this.products.filter(res =>{
                return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
            }
            )
        }
    }
    deleteProduct(product){
      this.productService.deleteProduct(product._id).subscribe((res) => {
        console.log('producto  borrada', res);
        this.getAllProducts();  
    });

    }

    getAllProducts(){
        this.productService.getAllProducts().subscribe(({products}) => {            
            this.products = products;
        });
    }

    SearchPromo(){
        if(this.promo == ""  ){
            this.getAllProducts();
        }else{
            this.products = this.products.filter(res =>{
                return res.promo(this.promo);
            })
        }
      }
 

    

    activeChange(product, e) {
        console.log(product, e.target.checked);
        const auxProduct = { ...product, active: e.target.checked };
        this.productService.updateProduct(auxProduct).subscribe((res) => {
          if (res.ok) {
            this.getAllProducts();
          }
        });
      }
}