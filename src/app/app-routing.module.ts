import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  { path: '', redirectTo: '/status', pathMatch: 'full' },
  { path: 'status', component: StatusComponent },
  { path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
