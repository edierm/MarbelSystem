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
    constructor(private productService: ProductService, private router: Router) {
    }
    ngOnInit() {
        this.productService.getAllProducts().subscribe(({products}) => {            
            this.products = products;
        });
    }
    editProduct(product) {
        localStorage.setItem('selectProduct', JSON.stringify(product));
        this.router.navigate([`/dashboard/product/edit/${product._id}`]);
    }

    Search(){
        if(this.name == ""){
            this.ngOnInit();
        }else{
            this.products = this.products.filter(res =>{
                return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
            })
        }
    }
}