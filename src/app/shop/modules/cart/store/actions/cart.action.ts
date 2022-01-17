import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';

export const addCartGoodAction = createAction(
  ActionTypes.ADD_CART_GOOD,
  props<{ id: string }>()
);

export const addCartGoodSuccessAction = createAction(
  ActionTypes.ADD_CART_GOOD_SUCCESS,
  props<{ id: string }>()
);

export const addCartGoodFailureAction = createAction(
  ActionTypes.ADD_CART_GOOD_FAILURE,
  props<{ error: string }>()
);
