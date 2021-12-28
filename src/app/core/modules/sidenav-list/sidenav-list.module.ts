import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavListComponent } from './components/sidenav-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SidenavListComponent],
  imports: [CommonModule, SharedModule],
  exports: [SidenavListComponent],
})
export class SidenavListModule {}
