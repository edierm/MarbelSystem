import { ClientValueAddComponent } from './clientvalue/components/clientadd-value.component';
import { DashboardClientComponent } from './dashboardclient/dashboard-client.component';
import { ValueComponent } from './value/value.component';
import { ClientAddRentComponent } from './clientrent/components/clientadd-rent.component';
import { ClientRentComponent } from './clientrent/client-rent.component';
import { ClientSaleComponent } from './clientsale/client-sale.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AddSaleComponent } from './sales/components/addsale/addsale.component';
import { LoginGuard } from './../guards/login/login.guard';
import { ListProductComponent } from './listproduct/listproduct.component';
import { AddRentComponent } from './sales/components/addrent/addrent.component';

import { DashboardAdminComponent } from './dashboard/dashboard-admin.component';
import { ProductsDashComponent } from './products/products.component';

import { SalesComponent } from './sales/sales.component';
import { DashboardComponent } from './dashboard.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/components/adduser/adduser.component';
import { ValueAddComponent } from './value/components/value-add.component';
import { ClientValueComponent } from './clientvalue/client-value.component';



export const DashboardRouting: Routes = [
  { path: '', redirectTo: 'dashboard/dashadmin', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'dashadmin', component: DashboardAdminComponent },
      { path: 'dashaclient', component: DashboardClientComponent },
      { path: 'user', component: UsersComponent },
      { path: 'product', component: ProductsDashComponent },
      { path: 'product/edit/:id', component: ProductsDashComponent },
      { path: 'sales', component: SalesComponent },
      { path: 'sales/edit/:id', component: AddSaleComponent },
      { path: 'rent/edit/:id', component: AddRentComponent },
      { path: 'user/edit/:id', component: AddUserComponent},
      { path: 'value/edit/:id', component: ValueAddComponent},
      { path: 'valueclient', component: ClientValueComponent },
      { path: 'addsale', component: AddSaleComponent },
      { path: 'addrent', component: AddRentComponent },
      { path: 'addUser', component: AddUserComponent},
      { path: 'listproduct', component: ListProductComponent },
      { path: 'perfil', component: PerfilComponent },
      { path: 'clientsale', component: ClientSaleComponent },
      { path: 'clientrent', component: ClientRentComponent },
      { path: 'clientaddrent', component: ClientAddRentComponent },
      { path: 'value', component: ValueComponent },
      { path: 'value-add', component: ValueAddComponent },
      { path: 'clientaddvalue', component: ClientValueAddComponent },
      
      
    

    ],
    canActivate: [LoginGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(DashboardRouting)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
