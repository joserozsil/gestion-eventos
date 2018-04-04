import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'user',
        loadChildren: './user/user.module#UserModule'
      }
    ]
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'action',
        loadChildren: './auth/auth.module#AuthModule'
      }
    ]
  }
];

