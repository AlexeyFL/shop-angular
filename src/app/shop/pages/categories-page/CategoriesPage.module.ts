import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';

import { CategoriesPageComponent } from './components/categories-page.component';
import { reducer } from './store/reducer';
import { GetAllCategoriesEffect } from './store/effects/categories.effect';
import { SharedModule } from 'src/app/shared/shared.module';
import { SubCategoriesModule } from '../../modules/sub-categories/sub-categories.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('categories', reducer),
    EffectsModule.forFeature([GetAllCategoriesEffect]),
    SharedModule,
    SubCategoriesModule,
    RouterModule,
  ],
  declarations: [CategoriesPageComponent],
})
export default class CategoriesPageModule {}
