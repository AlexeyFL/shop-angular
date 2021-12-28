import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HeaderModule } from './modules/header/header.module';
import { SidenavListModule } from './modules/sidenav-list/sidenav-list.module';
import { FooterModule } from './modules/footer/footer.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    HeaderModule,
    SidenavListModule,
    FooterModule,
  ],
  exports: [HeaderModule, SidenavListModule, FooterModule],
})
export class CoreModule {}
