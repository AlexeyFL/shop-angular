import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './components/contacts.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ContactsComponent],
  imports: [CommonModule, SharedModule],
  exports: [ContactsComponent],
})
export class ContactsModule {}
