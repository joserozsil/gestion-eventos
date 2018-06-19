import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SecurityRoutes } from './security.routing';
import { SecurityComponent } from './security.component';


@NgModule({
  imports: [
    RouterModule.forChild(SecurityRoutes),
    CommonModule
  ],
  declarations: [SecurityComponent]
})

export class SecurityModule {
    
}
