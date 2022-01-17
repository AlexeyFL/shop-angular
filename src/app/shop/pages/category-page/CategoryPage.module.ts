import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';

import { CategoryPageComponent } from './components/category-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { reducer } from './store/reducer';
import { GetCategoryGoodsEffect } from './store/effects/categoryPage.effect';
import { GoodModule } from '../../modules/good/good.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    StoreModule.forFeature('categoryPageGoods', reducer),
    EffectsModule.forFeature([GetCategoryGoodsEffect]),
    GoodModule,
  ],
  declarations: [CategoryPageComponent],
})
export default class CategoryPageModule {}
