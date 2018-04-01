import { Routes } from '@angular/router';
import { UserListComponent } from './list/user-list.component';
import { UserCreateComponent } from './create/user-create.component';

export const UserRoutes: Routes = [
  {
    path: 'list',
    component: UserListComponent
  },
  {
    path: 'create',
    component: UserCreateComponent
  }
];
