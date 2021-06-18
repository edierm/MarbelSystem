import { ProductsComponent } from './modules/products/pages/products.component';
import { ListProductsComponent } from './modules/list-products/pages/list-products/list-products.component';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { Routes } from "@angular/router";

export const routes: Routes = [
    { path: 'inicio', component: HomeComponent },
    { path: '',   redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'list-products', component: ListProductsComponent },    
    { path: 'productos/:categoria', component: ProductsComponent },
    
  ]
  ;
    