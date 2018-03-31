import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';

export const AppRoutes: Routes = [{
  path: '',
  component: AdminLayoutComponent,
  children: [{
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },{
    path: 'user',
    loadChildren: './user/user.module#UserModule'
  }]
}];

