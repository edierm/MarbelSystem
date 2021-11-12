
import { NotificationsComponent } from './notifications/notifications.component';
import { MapsComponent } from './maps/maps.component';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';
import { TableComponent } from './table/table.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const  DashboardRouting : Routes = [ 
{ path: 'dashboard',      component: DashboardComponent },
{ path: 'user',           component: UserComponent },
{ path: 'table',          component: TableComponent },
{ path: 'typography',     component: TypographyComponent },
{ path: 'icons',          component: IconsComponent },
{ path: 'maps',           component: MapsComponent },
{ path: 'notifications',  component: NotificationsComponent },


];

@NgModule({
  imports: [RouterModule.forChild(DashboardRouting)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
