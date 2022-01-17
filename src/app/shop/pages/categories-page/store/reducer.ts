import { Action, createReducer, on } from '@ngrx/store';

import { ICategoryState } from '../types/categoriesState.interface';
import {
  getCategoriesAction,
  getCategoriesFailureAction,
  getCategoriesSuccessAction,
  setCurrentCategoryAction,
} from './actions/categories.action';

const initialState: ICategoryState = {
  data: null,
  isLoading: false,
  error: null,
  currentCategory: null,
};

const categoriesReducer = createReducer(
  initialState,
  on(getCategoriesAction, (state) => ({ ...state, isLoading: true })),
  on(getCategoriesSuccessAction, (state, action) => ({
    ...state,
    isLoading: false,
    data: action.categories,
  })),
  on(getCategoriesFailureAction, (state) => ({ ...state, isLoading: false })),

  on(setCurrentCategoryAction, (state, action) => ({
    ...state,
    currentCategory: action.currentCategoryId,
  }))
);

export function reducer(state: ICategoryState, action: Action) {
  return categoriesReducer(state, action);
}
