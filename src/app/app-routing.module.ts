import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './_auth/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: '', canActivate: [AuthGuard], children: [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: DashboardComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
