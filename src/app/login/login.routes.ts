
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LostComponent } from '../login/lostpassword/pages/lostpassword.component';


import { LoginComponent } from './login/pages/login.component';


export const routes: Routes = [
  
  {
    path: '',
    component: LoginComponent,
  },
  {
    path:'reset',
    component: LostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
