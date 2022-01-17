import { Action, createReducer, on } from '@ngrx/store';
import { IAuthState } from '../types/authState.interface';

import {
  loginAction,
  loginSuccessAction,
  loginFailureAction,
  registerAction,
  registerSuccessAction,
  registerFailureAction,
  logoutAction,
} from './actions/auth.action';

const initialState: IAuthState = {
  user: null,
  IsLoggedIn: false,
  isSubmitting: false,
  validationErrors: null,
};

const authReducer = createReducer(
  initialState,

  // login
  on(
    loginAction,
    (state): IAuthState => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })
  ),
  on(
    loginSuccessAction,
    (state, action): IAuthState => ({
      ...state,
      isSubmitting: false,
      user: action.user,
      IsLoggedIn: true,
      validationErrors: null,
    })
  ),
  on(
    loginFailureAction,
    (state, action): IAuthState => ({
      ...state,
      isSubmitting: false,
      IsLoggedIn: false,
      validationErrors: action.errors,
    })
  ),

  // register
  on(
    registerAction,
    (state): IAuthState => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })
  ),
  on(
    registerSuccessAction,
    (state, action): IAuthState => ({
      ...state,
      isSubmitting: false,
      user: action.user,
      IsLoggedIn: true,
      validationErrors: null,
    })
  ),
  on(
    registerFailureAction,
    (state, action): IAuthState => ({
      ...state,
      isSubmitting: false,
      IsLoggedIn: false,
      validationErrors: action.errors,
    })
  ),

  // logout
  on(
    logoutAction,
    (): IAuthState => ({
      ...initialState,
      IsLoggedIn: false,
    })
  )
);

export function reducer(state: IAuthState, action: Action) {
  return authReducer(state, action);
}
