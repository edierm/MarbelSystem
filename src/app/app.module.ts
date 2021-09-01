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

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CarouselModule.forRoot(),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
