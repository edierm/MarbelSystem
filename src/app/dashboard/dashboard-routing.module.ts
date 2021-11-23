import { ListProductComponent } from './listproduct/listproduct.component';
import { AddRentComponent } from './addrent/addrent.component';
import { AddSailComponent } from './addsail/addsail.component';
import { DashboardAdminComponent } from './dashboard/dashboard-admin.component';
import { ProductsDashComponent } from './products/products.component';
import { ReportsComponent } from './reports/reports.component';

import { SalesComponent } from './sales/sales.component';
import { DashboardComponent } from './dashboard.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './adduser/adduser.component';

export const  DashboardRouting : Routes = [ 
  { path: '', redirectTo: 'dashboard/dashadmin' , pathMatch:'full'     },
{ path: 'dashboard',      component: DashboardComponent,children:[
  { path: 'dashadmin',           component: DashboardAdminComponent },
  { path: 'user',           component: UsersComponent },
  { path: 'product',          component: ProductsDashComponent },
  { path: 'sales',     component: SalesComponent },
  { path: 'reports',          component: ReportsComponent },
  { path: 'addsail',          component: AddSailComponent },
  { path: 'addrent',          component: AddRentComponent },
  { path: 'adduser',          component: AddUserComponent },
  { path: 'listproduct',          component: ListProductComponent }
] },

];

@NgModule({
  imports: [RouterModule.forChild(DashboardRouting)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
