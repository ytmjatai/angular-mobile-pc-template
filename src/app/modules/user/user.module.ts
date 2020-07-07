import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { UserRoutingModule } from './user-routing.module';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SharedModule } from '../../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    ForgetPasswordComponent,
    ResetPasswordComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule
  ],
  exports: [
    ProfileComponent
  ]
})
export class UserModule { }
