import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./auth/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./auth/register/register.component').then(
        (m) => m.RegisterComponent
      ),
  },
  // {
  //   path: 'dashboard',
  //   loadComponent: () =>
  //     import('./features/dashboard/dashboard.component').then(
  //       (m) => m.DashboardComponent
  //     ),
  // },
  // {
  //   path: 'admin',
  //   loadComponent: () =>
  //     import('./layouts/admin-layout/admin-layout.component').then(
  //       (m) => m.AdminLayoutComponent
  //     ),
  //   children: [
  //     {
  //       path: 'users',
  //       loadComponent: () =>
  //         import('./admin/users/users.component').then((m) => m.UsersComponent),
  //     },
  //     {
  //       path: 'settings',
  //       loadComponent: () =>
  //         import('./admin/settings/settings.component').then(
  //           (m) => m.SettingsComponent
  //         ),
  //     },
  //     { path: '', redirectTo: 'users', pathMatch: 'full' },
  //   ],
  // },
  // {
  //   path: '**',
  //   loadComponent: () =>
  //     import('./shared/not-found/not-found.component').then(
  //       (m) => m.NotFoundComponent
  //     ),
  // },
];
