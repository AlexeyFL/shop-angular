import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAccountComponent } from './components/user-account/user-account.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserAccountPopupComponent } from './components/user-account-popup/user-account-popup.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UserAccountComponent, UserAccountPopupComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [UserAccountComponent],
})
export class UserAccountModule {}
