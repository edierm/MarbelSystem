import { DashboardAdminComponent } from './../dashboard/dashboard-admin.component';
import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    roles: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'dashadmin',     title: 'Dashboard',         icon:'nc-bank',       class: '', roles: 'admin' },
    { path: 'dashaclient',     title: 'Dashboard',         icon:'nc-bank',       class: '', roles: ' client' },
    { path: 'user',         title: 'Usuarios',             icon:'nc-single-02',    class: '', roles: 'admin' },
    { path: 'listproduct',          title: 'Productos',              icon:'nc-bag-16',      class: '', roles: 'admin' },
    { path: 'sales', title: 'Ventas ',     icon:'nc-shop',    class: '', roles: 'admin' },
    { path: 'reports',          title: 'Cotizaciones',      icon:'nc-paper',  class: '', roles: 'admin' },
    { path: 'clientsale',          title: 'Compras',      icon:'nc-cart-simple',  class: '', roles: 'client' },
    { path: 'clientrent',          title: 'Abonos',      icon:'nc-simple-add',  class: '', roles: 'client' },
    { path: 'value',          title: 'Cotizaciones',      icon:'nc-paper',  class: '', roles: 'client' },
];

@Component({
  
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    userLogin: any;
    ngOnInit() {
        this.userLogin = JSON.parse(localStorage.getItem('userLogin'));
        const role = this.userLogin.role.toLowerCase() ;
        this.menuItems = ROUTES.filter(menuItem => menuItem.roles.includes(role));
    }
}
