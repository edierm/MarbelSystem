import { HeaderComponent } from './core/header/header.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LostComponent } from './lostpassword/pages/lostpassword.component';
import { InfoComponent } from './info/pages/info.component';
import { TableComponent } from './table/pages/table.component';
import { BathroomsComponent } from './bathrooms/pages/bathrooms.component';
import { KitchensComponent } from './kitchens/pages/kitchens.component';
import { MantenenceComponent } from './mantenence/pages/mantenence.component';
import { RegisterComponent } from './register/pages/register.component';
import { SaleComponent } from './sale/pages/sale.component';
import { QuoteComponent } from './quote/pages/quote.component';
import { LoginComponent } from './login/pages/login.component';
import { ProductsComponent } from './products/pages/products.component';
import { ListProductsComponent } from './list-products/pages/list-products.component';
import { HomeComponent } from './home/pages/home/home.component';
import { ClientRoutingModule } from './client-routing.module';
import { FooterComponent } from './core/footer/footer.component';

@NgModule({
  declarations: [
    HomeComponent,
    ListProductsComponent,
    ProductsComponent,
    LoginComponent,
    QuoteComponent,
    SaleComponent,
    RegisterComponent,
    MantenenceComponent,
    KitchensComponent,
    BathroomsComponent,
    TableComponent,
    InfoComponent,
    LostComponent
   
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    CarouselModule.forRoot(),
    BrowserAnimationsModule,
   
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class ClientModule {}
