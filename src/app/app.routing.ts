import { RegisterComponent } from './modules/register/pages/register.component';
import { QuoteComponent } from './modules/quote/pages/quote.component';
import { SaleComponent } from './modules/sale/pages/sale.component';
import { ProductsComponent } from './modules/products/pages/products.component';
import { ListProductsComponent } from './modules/list-products/pages/list-products/list-products.component';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { Routes } from "@angular/router";
import { LoginComponent } from './modules/login/pages/login.component';

export const routes: Routes = [
    { path: 'inicio', component: HomeComponent },
    { path: '',   redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'list-products', component: ListProductsComponent },    
    { path: 'productos/:categoria', component: ProductsComponent },
    { path: 'login', component: LoginComponent },  
    { path: 'sale', component: SaleComponent },   
    { path: 'quote', component: QuoteComponent },
    { path: 'registro', component: RegisterComponent },  
  ]
  ;
    