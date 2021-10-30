import { NavbarModule } from './pages/components/navbar/navbar.module';
import { SidebarModule } from './pages/components/sidebar/sidebar.module';
import { FooterModule } from './pages/components/footer/footer.module';
import { UsersComponent } from './pages/modules/users/users.component';
import { DashboarRouting } from './dashboard.routing';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboarRouting),
    FormsModule,
     FooterModule,
     SidebarModule,
     NavbarModule
  ],
  declarations: [
      DashboardComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class DashboardModule {}
