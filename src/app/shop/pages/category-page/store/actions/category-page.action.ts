import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';

import { IGood } from 'src/app/shared/types/good.interface';

export const getCategoryGoodsAction = createAction(
  ActionTypes.GET_CATEGORY_GOODS,
  props<{ url: string }>()
);

export const getCategoryGoodsSuccessAction = createAction(
  ActionTypes.GET_CATEGORY_GOODS_SUCCESS,
  props<{ goods: IGood[] }>()
);

export const getCategoryGoodsFailureAction = createAction(
  ActionTypes.GET_CATEGORY_GOODS_FAILURE
);
