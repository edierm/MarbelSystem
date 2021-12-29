import { DashboardAdminComponent } from './../dashboard/dashboard-admin.component';
import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'dashadmin',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
    { path: 'user',         title: 'Usuarios',             icon:'nc-single-02',    class: '' },
    { path: 'listproduct',          title: 'Productos',              icon:'nc-bag-16',      class: '' },
    { path: 'sales', title: 'Ventas ',     icon:'nc-shop',    class: '' },
    { path: 'reports',          title: 'Reportes',      icon:'nc-paper',  class: '' },
    
];

@Component({
  
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
