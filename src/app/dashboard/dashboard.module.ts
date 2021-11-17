import { DashboardAdminComponent } from './dashboard/dashboard-admin.component';
import { ProductsDashComponent } from './products/products.component';
import { ReportsComponent } from './reports/reports.component';
import { SalesComponent } from './sales/sales.component';


import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';






import { DashboardRouting, DashboardRoutingModule } from './dashboard-routing.module';
import { UsersComponent } from './users/users.component';


@NgModule({
  imports: [
    RouterModule.forChild(DashboardRouting),
    FormsModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardAdminComponent,
    UsersComponent,
    ProductsDashComponent,
    SalesComponent,
    ReportsComponent,
   
  ]
})
export class DashboardModule { }
