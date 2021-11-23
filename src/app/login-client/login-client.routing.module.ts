import { LoginClientBathroomsComponent } from './pages/bathrooms.component';
import { LoginClientHomeComponent } from './home/pages/home/home.component';
import { LoginClientLayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginClientLostComponent } from './lostpassword/pages/lostpassword.component';
import { LoginClientInfoComponent } from './cinfo/pages/info.component';
import { LoginClientMantenenceComponent } from './mantenence/pages/mantenence.component';
import { Component } from '@angular/core';
import { LoginClientTableComponent } from './table/pages/table.component';

import { LoginClientRegisterComponent } from './register/pages/register.component';
import { LoginClientQuoteComponent } from './quote/pages/quote.component';
import { LoginClientSaleComponent } from './sale/pages/sale.component';
import { LoginClientProductsComponent } from './products/pages/products.component';
import { LoginClientListProductsComponent } from './list-products/pages/list-products.component';


import { LoginClientLoginComponent } from './login/pages/login.component';
import { LoginClientKitchensComponent } from './kitchens/pages/kitchens.component';

export const loginroutes: Routes = [
  {path: '', redirectTo:'loginclient/clienthome',pathMatch:'full'},
  {
    path: 'loginclient',
    component: LoginClientLayoutComponent,
    children: [
      {
        path: 'clienthome',
        component: LoginClientHomeComponent,
       
      },
      
      {
        path: 'clientproductos',
        component: LoginClientProductsComponent,
       
      },
      { path: 'clientlogin', component: LoginClientLoginComponent },
      { path: 'clientsale', component: LoginClientSaleComponent },
      { path: 'clientquote', component: LoginClientQuoteComponent },
      { path: 'clientregistro', component: LoginClientRegisterComponent },
      { path: 'clientmantenence', component: LoginClientMantenenceComponent },
      {
        path: 'clientproductos/ckitchens',
        component: LoginClientKitchensComponent,
      },
      {
        path: 'clientproductos/cbathrooms',
        component: LoginClientBathroomsComponent,
      },
      { path: 'clientproductos/ctable', component: LoginClientTableComponent },
      { path: 'cinfo', component: LoginClientInfoComponent },
      { path: 'clientlost', component: LoginClientLostComponent },
      { path: 'clientlist-products', component: LoginClientListProductsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(loginroutes)],
  exports: [RouterModule],
})
export class LoginClientRoutingModule {}
