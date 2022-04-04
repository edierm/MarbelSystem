import { HsaleComponent } from './helpsale/hsale.component';
import { ClientValueAddComponent } from './clientvalue/components/clientadd-value.component';
import { ClientValueComponent } from './clientvalue/client-value.component';
import { DashboardClientComponent } from './dashboardclient/dashboard-client.component';
import { ValueAddComponent } from './value/components/value-add.component';
import { ValueComponent } from './value/value.component';
import { ClientRentComponent } from './clientrent/client-rent.component';
import { BrowserModule } from '@angular/platform-browser';
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
import { SalesComponent } from './sales/sales.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { AddRentComponent } from './sales/components/addrent/addrent.component';
import { AddUserComponent } from './users/components/adduser/adduser.component';
import { ClientAddRentComponent } from './clientrent/components/clientadd-rent.component';
import { HproductComponent } from './helpproduct/hproduct.component';
import { HvalueComponent } from './helpvalue/hvalue.component';
import { HpaymentComponent } from './helppayment/hpayment.component';
import { HadminComponent } from './helpadmin/hadmin.component';
import { HuserComponent } from './helpuser/huser.component';
import { ClientHsaleComponent } from './clienthelpsale/clienthsale.component';
import { ClientHrentComponent } from './clienthrent/clienthrent.component';
import { ClientHvalueComponent } from './clienthvalue/clienthvalue.component';




@NgModule({
 
  declarations: [
    DashboardAdminComponent,
    UsersComponent,
    ProductsDashComponent,
    SalesComponent,
    DashboardComponent,
    AddRentComponent,
    ListProductComponent,
    AddUserComponent,
    AddSaleComponent,
    PerfilComponent,
    ClientSaleComponent,
    ClientRentComponent,
    ClientAddRentComponent,
    ValueComponent,
    ValueAddComponent,
    ClientValueAddComponent,
    DashboardClientComponent,
    ClientValueComponent,
    HproductComponent,
    HvalueComponent,
    HpaymentComponent,
    HsaleComponent,
    HadminComponent,
    HuserComponent,
    ClientHsaleComponent,
    ClientHrentComponent,
    ClientHvalueComponent
    
    
  
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DashboardRoutingModule,
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    ModalModule.forRoot()   
  ],
  exports: [
    BrowserModule,
  
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }
