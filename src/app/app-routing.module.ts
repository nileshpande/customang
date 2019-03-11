import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './layouts/admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './layouts/pages/pages.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path:'',  redirectTo: 'dashboard',  pathMatch: 'full'
  },
  {
    path:'',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path:'dashboard',
        component:  DashboardComponent 
      }
    ]
  },
  {
    path:'',
    component: PagesComponent,
    children:[
      {
        path:'login',
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
