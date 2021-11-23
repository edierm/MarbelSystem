import { ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { LoginClientRoutingModule } from './login-client.routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginClientLayoutComponent } from './layout/layout.component';
import { LoginClientLostComponent } from './lostpassword/pages/lostpassword.component';
import { LoginClientInfoComponent } from './cinfo/pages/info.component';
import { LoginClientTableComponent } from './table/pages/table.component';
import { LoginClientBathroomsComponent } from './pages/bathrooms.component';
import { LoginClientKitchensComponent } from './kitchens/pages/kitchens.component';
import { LoginClientMantenenceComponent } from './mantenence/pages/mantenence.component';
import { LoginClientRegisterComponent } from './register/pages/register.component';
import { LoginClientSaleComponent } from './sale/pages/sale.component';
import { LoginClientQuoteComponent } from './quote/pages/quote.component';
import { LoginClientLoginComponent } from './login/pages/login.component';
import { LoginClientProductsComponent } from './products/pages/products.component';
import { LoginClientListProductsComponent } from './list-products/pages/list-products.component';
import { LoginClientHomeComponent } from './home/pages/home/home.component';

@NgModule({
    declarations: [
      LoginClientHomeComponent,
      LoginClientListProductsComponent,
      LoginClientProductsComponent,
      LoginClientLoginComponent,
      LoginClientQuoteComponent,
      LoginClientSaleComponent,
      LoginClientRegisterComponent,
      LoginClientMantenenceComponent,
      LoginClientKitchensComponent,
      LoginClientBathroomsComponent,
      LoginClientTableComponent,
      LoginClientInfoComponent,
      LoginClientLostComponent,
      LoginClientLayoutComponent
    ],
    imports: [
      CommonModule,
      LoginClientRoutingModule,
      CarouselModule.forRoot(),
    
      BsDropdownModule,
      ReactiveFormsModule
    ],
  })
export class LoginClientModule {}
