import { Action, createReducer, on } from '@ngrx/store';
import { ICategoryPageStateInterface } from '../types/CategoryPageState.interface';

import {
  getCategoryGoodsAction,
  getCategoryGoodsSuccessAction,
  getCategoryGoodsFailureAction,
} from './actions/category-page.action';

const initialState: ICategoryPageStateInterface = {
  data: null,
  isLoading: false,
  error: null,
};

const categoryPageReducer = createReducer(
  initialState,
  on(getCategoryGoodsAction, (state) => ({ ...state, isLoading: true })),
  on(getCategoryGoodsSuccessAction, (state, action) => ({
    ...state,
    isLoading: false,
    data: action.goods,
  })),
  on(getCategoryGoodsFailureAction, (state) => ({ ...state, isLoading: false }))
);

export function reducer(state: ICategoryPageStateInterface, action: Action) {
  return categoryPageReducer(state, action);
}
