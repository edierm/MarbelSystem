
import { ReactiveFormsModule } from '@angular/forms';

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
