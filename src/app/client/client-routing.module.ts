import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LostComponent } from './lostpassword/pages/lostpassword.component';
import { InfoComponent } from './info/pages/info.component';
import { MantenenceComponent } from './mantenence/pages/mantenence.component';
import { Component } from '@angular/core';
import { TableComponent } from './table/pages/table.component';
import { BathroomsComponent } from './bathrooms/pages/bathrooms.component';
import { RegisterComponent } from './register/pages/register.component';
import { QuoteComponent } from './quote/pages/quote.component';
import { SaleComponent } from './sale/pages/sale.component';
import { ProductsComponent } from './products/pages/products.component';
import { ListProductsComponent } from './list-products/pages/list-products.component';
import { HomeComponent } from './home/pages/home/home.component';

import { LoginComponent } from './login/pages/login.component';
import { KitchensComponent } from './kitchens/pages/kitchens.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'list-products', component: ListProductsComponent },
  {
    path: 'productos',
    component: ProductsComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: 'sale', component: SaleComponent },
  { path: 'quote', component: QuoteComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'mantenence', component: MantenenceComponent },
  {
    path: 'productos/kitchens',
    component: KitchensComponent,
  },
  {
    path: 'productos/bathrooms',
    component: BathroomsComponent,
  },
  { path: 'productos/table', component: TableComponent },
  { path: 'info', component: InfoComponent },
 { path: 'lost', component: LostComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
