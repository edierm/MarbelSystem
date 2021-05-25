import { ListProductsComponent } from './modules/list-products/pages/list-products/list-products.component';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { Routes } from "@angular/router";

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: 'list-products', component: ListProductsComponent },    
  ];
    