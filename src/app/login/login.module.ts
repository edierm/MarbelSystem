import { ModalModule } from 'ngx-bootstrap/modal';
import { RegisterComponent } from './register/pages/register.component';

import { ReactiveFormsModule } from '@angular/forms';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LostComponent } from '../login/lostpassword/pages/lostpassword.component';
import { LoginComponent } from './login/pages/login.component';
import { LoginRoutingModule } from './login.routes';

@NgModule({
  declarations: [LostComponent, LoginComponent , RegisterComponent ],
  imports: [LoginRoutingModule, CommonModule, ReactiveFormsModule,ModalModule.forRoot()],

  exports: [
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClientModule {}
