import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { UserRoutes } from './user.routing';

import { UserListComponent } from './list/user-list.component';
import { UserCreateComponent } from './create/user-create.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes)
  ],
  declarations: [UserListComponent, UserCreateComponent]
})

export class UserModule {
    
}
