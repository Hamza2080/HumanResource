import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { UserProfileComponent } from './components/home/user-profile/user-profile.component';
import { DashboardComponent } from './components/home/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'profile',
        component : UserProfileComponent
      },
      {
        path: 'dashboard',
        component : DashboardComponent
      },
      {
        path : '',
        redirectTo : 'dashboard',
        pathMatch : 'full'
      }
    ]
  },
  {
    path : '',
    redirectTo : 'home',
    pathMatch : 'full'
  },
  {
    path : '**',
    redirectTo : 'error',
    pathMatch : 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
