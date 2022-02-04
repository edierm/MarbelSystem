import { BrowserModule } from '@angular/platform-browser';
import { ClientRentComponent } from './clientrent/client-rent.component';
import { ClientSaleComponent } from './clientsale/client-sale.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AddSaleComponent } from './sales/components/addsale/addsale.component';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ListProductComponent } from './listproduct/listproduct.component';
import { CommonModule } from '@angular/common';
import { FixedPluginModule } from './shared/fixedplugin/fixedplugin.module';
import { FooterModule } from './shared/footer/footer.module';
import { ToastrModule } from 'ngx-toastr';
import { NavbarModule } from './shared/navbar/navbar.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { DashboardComponent } from './dashboard.component';

import { DashboardAdminComponent } from './dashboard/dashboard-admin.component';
import { ProductsDashComponent } from './products/products.component';
import { ReportsComponent } from './reports/reports.component';
import { SalesComponent } from './sales/sales.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { AddRentComponent } from './sales/components/addrent/addrent.component';
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
    AddRentComponent,
    ListProductComponent,
    AddUserComponent,
    AddSaleComponent,
    PerfilComponent,
    ClientSaleComponent,
    ClientRentComponent
    
  
  ],
  exports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }
