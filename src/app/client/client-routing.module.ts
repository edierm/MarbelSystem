import { HelpComponent } from './help/help.component';
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
import { JoinComponent } from './join/join.component';
import { BuyComponent } from './buy/buy.component';

export const routes: Routes = [
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
        path: 'kitchens',
        component: KitchensComponent,
      },
      {
        path: 'bathrooms',
        component: BathroomsComponent,
      },
      { path: 'table', component: TableComponent },
      { path: 'info', component: InfoComponent },
      { path: 'lost', component: LostComponent },
      { path: 'list-products', component: ListProductsComponent },
      { path: 'help', component: HelpComponent },
      { path: 'join', component: JoinComponent},
      { path: 'buy', component: BuyComponent}
    ],
  },
  // {
  //   path: 'client/sale', component: SaleComponent, pathMatch:'full'
  // },
  {path: '', redirectTo:'client/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
