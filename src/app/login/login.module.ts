import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LostComponent } from '../login/lostpassword/pages/lostpassword.component';
import { LoginComponent } from './login/pages/login.component';
import { LoginRoutingModule } from './login.routes';

@NgModule({
  declarations: [LostComponent, LoginComponent],
  imports: [LoginRoutingModule, CommonModule, ReactiveFormsModule],
})
export class ClientModule {}
