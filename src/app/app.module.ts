import { LostComponent } from './modules/lostpassword/pages/lostpassword.component';
import { InfoComponent } from './modules/info/pages/info.component';
import { TableComponent } from './modules/table/pages/table.component';
import { BathroomsComponent } from './modules/bathrooms/pages/bathrooms.component';
import { KitchensComponent } from './modules/kitchens/pages/kitchens.component';
import { MantenenceComponent } from './modules/mantenence/pages/mantenence.component';
import { RegisterComponent } from './modules/register/pages/register.component';
import { SaleComponent } from './modules/sale/pages/sale.component';
import { QuoteComponent } from './modules/quote/pages/quote.component';
import { LoginComponent } from './modules/login/pages/login.component';
import { ProductsComponent } from './modules/products/pages/products.component';
import { ListProductsComponent } from './modules/list-products/pages/list-products.component';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
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
    LostComponent,


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CarouselModule.forRoot(),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
