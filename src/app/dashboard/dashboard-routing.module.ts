import { ReportsComponent } from './reports/reports.component';
import { ProductsComponent } from './../client/products/pages/products.component';
import { SalesComponent } from './sales/sales.component';
import { DashboardComponent } from './dashboard.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';

export const  DashboardRouting : Routes = [ 
{ path: 'dashboard',      component: DashboardComponent },
{ path: 'user',           component: UsersComponent },
{ path: 'product',          component: ProductsComponent },
{ path: 'sales',     component: SalesComponent },
{ path: 'reports',          component: ReportsComponent },



];

@NgModule({
  imports: [RouterModule.forChild(DashboardRouting)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
