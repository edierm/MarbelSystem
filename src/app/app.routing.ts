import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'client',
    pathMatch: 'full'
  },
  {

    path: 'client',
    loadChildren: () =>
      import('./client/client.module').then((m) => m.ClientModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  {
    path: 'login',
    loadChildren: () =>
    import('./login/login.module').then(m => m.ClientModule)
  }
 
  // {
  //   path: "",
  //   redirectTo:"",
  //   pathMatch: "full",
  // }
];
