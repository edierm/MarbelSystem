import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HelpComponent } from './help/help.component';
import { SaleComponent } from './sale/pages/sale.component';
import { LayoutComponent } from './layout/layout.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HeaderComponent } from './core/header/header.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info/pages/info.component';
import { TableComponent } from './table/pages/table.component';
import { BathroomsComponent } from './bathrooms/pages/bathrooms.component';
import { KitchensComponent } from './kitchens/pages/kitchens.component';
import { MantenenceComponent } from './mantenence/pages/mantenence.component';


import { QuoteComponent } from './quote/pages/quote.component';
import { ProductsComponent } from './products/pages/products.component';
import { ListProductsComponent } from './list-products/pages/list-products.component';
import { HomeComponent } from './home/pages/home/home.component';
import { ClientRoutingModule } from './client-routing.module';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { JoinComponent } from './join/join.component';
import { BuyComponent } from './buy/buy.component';

@NgModule({
  declarations: [
    HomeComponent,
    ListProductsComponent,
    ProductsComponent,
    QuoteComponent,
    SaleComponent,
    SpinnerComponent,
    MantenenceComponent,
    KitchensComponent,
    BathroomsComponent,
    TableComponent,
    InfoComponent,
    LayoutComponent,
    HelpComponent,
    JoinComponent,
    BuyComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    CarouselModule.forRoot(),
    FormsModule,
    BsDropdownModule,
    ReactiveFormsModule,
    NgxImageZoomModule,
    NgbModule
  ],
})
export class ClientModule {}
