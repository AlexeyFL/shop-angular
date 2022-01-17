import { Action, createReducer, on } from '@ngrx/store';
import { ICartStateInterface } from '../types/cartState.interface';

import {
  addCartGoodAction, addCartGoodFailureAction
} from './actions/cart.action';

const initialState: ICartStateInterface = {
  cartGoods: [],
  error: null,
};

const cartReducer = createReducer(
  initialState,
  on(addCartGoodAction, (state, action) => ({ ...state, cartGoods: [...action.id] })),
  on(addCartGoodFailureAction, (state, action) => ({ ...state, error: action.error }))
);

export function reducer(state: ICartStateInterface, action: Action) {
  return cartReducer(state, action);
}
