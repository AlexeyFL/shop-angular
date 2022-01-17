import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from 'src/app/shared/types/appState.interface';
import { ICategoryState } from '../types/categoriesState.interface';

export const categoriesFeatureSelector =
  createFeatureSelector<ICategoryState>('categories');

export const categoriesIsLoadingSelector = createSelector(
  categoriesFeatureSelector,
  (categoriesState: ICategoryState) => categoriesState.isLoading
);

export const categoriesDataSelector = createSelector(
  categoriesFeatureSelector,
  (categoriesState: ICategoryState) => categoriesState.data
);

export const categoriesCurrentCategorySelector = createSelector(
  categoriesFeatureSelector,
  (categoriesState: ICategoryState) => categoriesState.currentCategory
);

export const categoriesCurrentCategoriesSelector = (id: string) =>
  createSelector(categoriesFeatureSelector, (categoriesState: ICategoryState) =>
    categoriesState.data?.find((category) => category.id === id)
  );
