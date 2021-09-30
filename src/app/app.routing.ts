import { LostComponent } from './modules/lostpassword/pages/lostpassword.component';
import { InfoComponent } from './modules/info/pages/info.component';
import { MantenenceComponent } from './modules/mantenence/pages/mantenence.component';
import { Component } from '@angular/core';
import { TableComponent } from './modules/table/pages/table.component';
import { BathroomsComponent } from './modules/bathrooms/pages/bathrooms.component';
import { RegisterComponent } from './modules/register/pages/register.component';
import { QuoteComponent } from './modules/quote/pages/quote.component';
import { SaleComponent } from './modules/sale/pages/sale.component';
import { ProductsComponent } from './modules/products/pages/products.component';
import { ListProductsComponent } from './modules/list-products/pages/list-products.component';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './modules/login/pages/login.component';
import { KitchensComponent } from './modules/kitchens/pages/kitchens.component';

export const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'list-products', component: ListProductsComponent },
  {
    path: 'productos',
    component: ProductsComponent
  },
  { path: 'login', component: LoginComponent },
  { path: 'sale', component: SaleComponent },
  { path: 'quote', component: QuoteComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'mantenence', component: MantenenceComponent },
  {
    path: 'productos/kitchens',
    component: KitchensComponent
  },
  {
    path: 'productos/bathrooms',
    component: BathroomsComponent
  },
  { path: 'productos/table', component: TableComponent },
  { path: 'info', component: InfoComponent },
  { path: 'lost', component: LostComponent },
];
