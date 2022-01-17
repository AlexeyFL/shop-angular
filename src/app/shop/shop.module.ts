import { NgModule } from '@angular/core';
import { ContactsModule } from './modules/contacts/contacts.module';
import { MainPageComponent } from './pages/main-page/components/main-page.component';
import { AboutPageComponent } from './pages/about-page/components/about-page.component';
import CategoriesPageModule from './pages/categories-page/CategoriesPage.module';
import CategoryPageModule from './pages/category-page/CategoryPage.module';
import AuthModule from './modules/auth/auth.module';

@NgModule({
  declarations: [MainPageComponent, AboutPageComponent],
  imports: [ContactsModule, CategoriesPageModule, CategoryPageModule, AuthModule],
  exports: [ContactsModule],
})
export class ShopModule {}
