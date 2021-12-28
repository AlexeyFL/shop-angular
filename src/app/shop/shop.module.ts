import { NgModule } from '@angular/core';
import { ContactsModule } from './modules/contacts/contacts.module';

@NgModule({
  declarations: [],
  imports: [ContactsModule],
  exports: [ContactsModule],
})
export class ShopModule {}
