import { NotificationsComponent } from './notifications/notifications.component';
import { MapsComponent } from './maps/maps.component';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';
import { TableComponent } from './table/table.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';






import { DashboardRouting, DashboardRoutingModule } from './dashboard-routing.module';


@NgModule({
  imports: [
    RouterModule.forChild(DashboardRouting),
    FormsModule,
    DashboardRouting
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TableComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
  ]
})
export class DashboardModule { }
