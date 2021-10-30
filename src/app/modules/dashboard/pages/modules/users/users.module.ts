import { UsersComponent } from './users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { usersRouting } from './users.routing';

@NgModule({
  imports: [RouterModule, CommonModule, RouterModule.forChild(usersRouting)],
  declarations: [UsersComponent],
  exports: [UsersComponent],
})
export class UserModule {}
