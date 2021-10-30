import { UsersComponent } from './pages/modules/users/users.component';
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

export const DashboarRouting: Routes = [
  {
      path: '',
      component: DashboardComponent
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./pages/modules/users/users.module').then((m) => m.UserModule),
  },
];
