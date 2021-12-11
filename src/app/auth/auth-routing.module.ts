import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthPage } from './auth.page';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  {
    path: '',
    component: AuthPage,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'forgot',
        component: ForgotPasswordComponent,
      },
      {
        path: 'reset/:token',
        component: ResetPasswordComponent,
      },
      {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'all',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class AuthRoutingModule {
  static components = [
    AuthPage,
    ForgotPasswordComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
  ];
}
