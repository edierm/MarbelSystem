import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { DashboardRouting } from '../../dashboard-routing.module';

@NgModule({
    imports: [ RouterModule, CommonModule, DashboardRouting ],
    declarations: [ NavbarComponent ],
    exports: [ NavbarComponent ]
})

export class NavbarModule {}
