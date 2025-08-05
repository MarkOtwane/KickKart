import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.component').then((m) => m.RegisterComponent),
  },
  {
    path: 'reset-password',
    loadChildren: () =>
      import('./reset-password/reset-password.component').then(
        (m) => m.ResetPasswordComponent
      ),
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AuthModule {}
