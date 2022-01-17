import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLocationComponent } from './components/user-location.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [UserLocationComponent],
  imports: [CommonModule, SharedModule],
  exports: [UserLocationComponent],
})
export class UserLocationModule {

}
