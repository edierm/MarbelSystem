import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
    { path: '/users',         title: 'Usuarios',             icon:'nc-diamond',    class: '' },
    { path: '/products',          title: 'Productos',              icon:'nc-pin-3',      class: '' },
    { path: '/sales', title: 'Ventas',     icon:'nc-bell-55',    class: '' },
    { path: '/reports',          title: 'Reports',      icon:'nc-tag-content',  class: '' },
    
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
