import { ModalModule } from 'ngx-bootstrap/modal';
import { ListProductComponent } from './listproduct/listproduct.component';
import { AddSailComponent } from './addsail/addsail.component';
import { CommonModule } from '@angular/common';
import { FixedPluginModule } from './shared/fixedplugin/fixedplugin.module';
import { FooterModule } from './shared/footer/footer.module';
import { ToastrModule } from 'ngx-toastr';
import { NavbarModule } from './shared/navbar/navbar.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FixedPluginComponent } from './shared/fixedplugin/fixedplugin.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './dashboard.component';

import { DashboardAdminComponent } from './dashboard/dashboard-admin.component';
import { ProductsDashComponent } from './products/products.component';
import { ReportsComponent } from './reports/reports.component';
import { SalesComponent } from './sales/sales.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardRouting, DashboardRoutingModule } from './dashboard-routing.module';
import { UsersComponent } from './users/users.component';
import { AddRentComponent } from './addrent/addrent.component';
import { AddUserComponent } from './users/components/adduser/adduser.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    ModalModule.forRoot()   
  ],
  declarations: [
    DashboardAdminComponent,
    UsersComponent,
    ProductsDashComponent,
    SalesComponent,
    ReportsComponent,
    DashboardComponent,
    AddSailComponent,
    AddRentComponent,
    ListProductComponent,
    AddUserComponent
  
  ],
  exports: [
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }
