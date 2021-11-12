import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FixedPluginComponent } from './fixedplugin.component';

import { DashboardRouting } from '../../dashboard-routing.module';

@NgModule({
    imports: [ RouterModule, CommonModule, DashboardRouting ],
    declarations: [ FixedPluginComponent ],
    exports: [ FixedPluginComponent ]
})

export class FixedPluginModule {}
