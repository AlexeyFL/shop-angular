import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICategoryPageStateInterface } from '../types/CategoryPageState.interface';

export const categoryGoodsFeatureSelector =
  createFeatureSelector<ICategoryPageStateInterface>('categoryGoods');

export const categoryPageIsLoadingSelector = createSelector(
  categoryGoodsFeatureSelector,
  (state) => state.isLoading
);

export const categoryPageGoodsSelector = createSelector(
  categoryGoodsFeatureSelector,
  (state) => state.data
);

export const categoryPageErrorSelector = createSelector(
  categoryGoodsFeatureSelector,
  (state) => state.error
);
