import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchModule } from '../search/search.module';
import { UserAccountModule } from '../user-account/user-account.module';

@NgModule({
  declarations: [NavigationComponent],
  imports: [CommonModule, SharedModule, SearchModule, UserAccountModule],
  exports: [NavigationComponent],
})
export class NavigationModule {}
