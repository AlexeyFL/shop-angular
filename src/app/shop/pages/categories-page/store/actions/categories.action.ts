import { createAction, props } from '@ngrx/store';
import { ICategory } from 'src/app/shared/types/category.inteface';

import { ActionTypes } from '../actionTypes';

export const getCategoriesAction = createAction(ActionTypes.GET_CATEGORIES);

export const getCategoriesSuccessAction = createAction(
  ActionTypes.GET_CATEGORIES_SUCCESS,
  props<{ categories: ICategory[] }>()
);

export const getCategoriesFailureAction = createAction(
  ActionTypes.GET_CATEGORIES_FAILURE
);

export const setCurrentCategoryAction = createAction(
  ActionTypes.SET_CURRENT_CATEGORY,
  props<{ currentCategoryId: string }>()
);
