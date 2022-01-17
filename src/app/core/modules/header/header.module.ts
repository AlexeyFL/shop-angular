import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { SidenavListModule } from '../sidenav-list/sidenav-list.module';
import { ContactsModule } from 'src/app/shop/modules/contacts/contacts.module';
import { UserLocationModule } from 'src/app/shop/modules/user-location/user-location.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    SidenavListModule,
    ContactsModule,
    UserLocationModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
