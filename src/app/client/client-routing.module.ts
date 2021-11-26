import { HomeComponent } from './home/pages/home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LostComponent } from '../login/lostpassword/pages/lostpassword.component';
import { InfoComponent } from './info/pages/info.component';
import { MantenenceComponent } from './mantenence/pages/mantenence.component';
import { Component } from '@angular/core';
import { TableComponent } from './table/pages/table.component';
import { BathroomsComponent } from './bathrooms/pages/bathrooms.component';

import { QuoteComponent } from './quote/pages/quote.component';
import { SaleComponent } from './sale/pages/sale.component';
import { ProductsComponent } from './products/pages/products.component';
import { ListProductsComponent } from './list-products/pages/list-products.component';



import { KitchensComponent } from './kitchens/pages/kitchens.component';

export const routes: Routes = [
  {path: '', redirectTo:'client/home',pathMatch:'full'},
  {
    path: 'client',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
       
      },      
      {
        path: 'productos',
        component: ProductsComponent,
       
      },      
      { path: 'sale', component: SaleComponent },
      { path: 'quote', component: QuoteComponent },
      
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
      { path: 'list-products', component: ListProductsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
