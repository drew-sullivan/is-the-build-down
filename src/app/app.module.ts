import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StatusComponent } from './status/status.component';
import { AdminComponent } from './admin/admin.component';
import { AppRoutingModule } from './/app-routing.module';

import { AdminService } from './admin.service';

@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ AdminService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
