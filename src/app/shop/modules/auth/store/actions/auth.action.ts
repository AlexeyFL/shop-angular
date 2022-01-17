import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { HttpErrorResponse } from '@angular/common/http';

import { IUser } from 'src/app/shared/types/user.interface';
import {
  ILoginUser,
  IRegisterUser,
} from 'src/app/shared/types/registerUser.interface';
import { IBackendErrors } from 'src/app/shared/types/backendErrors.interface';

// login
export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{ request: ILoginUser }>()
);
export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{ user: IUser }>()
);
export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{ errors: string }>()
);

// register
export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: IRegisterUser }>()
);
export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ user: IUser }>()
);
export const registerFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{ errors: string }>()
);

// logout
export const logoutAction = createAction(ActionTypes.LOGOUT);
