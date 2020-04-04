import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { UserVerificationComponent } from './components/user-verification/user-verification.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreatenotesComponent } from './components/createnotes/createnotes.component';

const routes: Routes = [
  {path:"registration" , component:RegistrationComponent},
  {path:"" , component:CreatenotesComponent},
  {path:"login" , component:LoginComponent},
  {path:"forgotPassword" , component:ForgotPasswordComponent},
  {path:"resetPassword/:token" , component:ResetPasswordComponent},
  {path:"Verification/:token" , component:UserVerificationComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"createnotes",component:CreatenotesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
