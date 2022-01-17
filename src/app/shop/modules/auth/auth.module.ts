import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { RegisterPageComponent } from './components/register-page/register-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SubCategoriesModule } from '../../modules/sub-categories/sub-categories.module';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducer';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffect } from './store/effects/login.effect';
import { RegisterEffect } from './store/effects/register.effect';
import { BackendErrorsMessagesModule } from 'src/app/shared/modules/backend-errors-messages/backend-errors-messages.module';
import { LogoutEffect } from './store/effects/logout.effect';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SubCategoriesModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature('auth', reducer),
    EffectsModule.forFeature([LoginEffect, RegisterEffect, LogoutEffect]),
    BackendErrorsMessagesModule,
  ],
  declarations: [RegisterPageComponent, LoginPageComponent],
})
export default class AuthModule {}
