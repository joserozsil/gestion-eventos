import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ChronologyListComponent } from './list/chronology-list.component';
import { ChronologyRoutes } from './chronology.routing';

@NgModule({
  imports: [
    RouterModule.forChild(ChronologyRoutes),
    CommonModule
  ],
  declarations: [ChronologyListComponent]
})

export class ChronologyModule {
    
}
