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
    path: 'loginclient',
    loadChildren: () =>
    import('./login-client/login-client.module').then((m) => m.LoginClientModule)
  },
  // {
  //   path: "",
  //   redirectTo:"",
  //   pathMatch: "full",
  // }
];
