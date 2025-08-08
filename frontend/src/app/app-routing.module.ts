import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { rolesGuard } from './core/guards/roles.guard';

// const routes: Routes = [
//   {
//     path: 'auth',
//     loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
//   },
//   // You can add a wildcard route for unknown paths
//   { path: '**', redirectTo: 'auth/login' },
// ];
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'customers',
    canActivate: [authGuard, rolesGuard],
    data: { roles: ['USER'] },
    loadChildren: () =>
      import('./customers/customers.module').then((m) => m.CustomersModule),
  },

  {
    path: 'admin',
    canActivate: [authGuard, rolesGuard],
    data: { roles: ['ADMIN'] },
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },

  { path: '**', redirectTo: '/not-found' },
  {
    path: 'user',
    canActivate: [authGuard, rolesGuard],
    data: { roles: ['CUSTOMERS'] },
    loadChildren: () =>
      import('./customers/customers.module').then((m) => m.CustomersModule),
  },
  {
    path: 'admin',
    canActivate: [authGuard, rolesGuard],
    data: { roles: ['ADMIN'] },
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
