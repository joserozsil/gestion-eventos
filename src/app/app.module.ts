import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
