import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './shop/pages/about-page/components/about-page.component';
import { LoginPageComponent } from './shop/modules/auth/components/login-page/login-page.component';
import { RegisterPageComponent } from './shop/modules/auth/components/register-page/register-page.component';
import { CategoriesPageComponent } from './shop/pages/categories-page/components/categories-page.component';
import { CategoryPageComponent } from './shop/pages/category-page/components/category-page.component';
import { MainPageComponent } from './shop/pages/main-page/components/main-page.component';
import { SubCategoryPageComponent } from './shop/pages/subcategory-page/components/subCategory-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'categories', component: CategoriesPageComponent },
  { path: 'categories/:categoryId', component: CategoryPageComponent },
  {
    path: 'categories/:categoryId/:subcategoryId',
    component: SubCategoryPageComponent,
  },
  { path: 'register', component: RegisterPageComponent },
  { path: 'login', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
