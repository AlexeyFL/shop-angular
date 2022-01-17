import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { CartComponent } from './components/cart.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { reducer } from './store/reducer';
import { GetCategoryGoodsEffect } from './store/effects/cart.effect';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    StoreModule.forFeature('cart', reducer),
    // EffectsModule.forFeature([GetCategoryGoodsEffect]),
  ],
  declarations: [CartComponent],
})
export default class CartModule {}
