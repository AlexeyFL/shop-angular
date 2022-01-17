import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAuthState } from '../types/authState.interface';

export const authFeatureSelector =
  createFeatureSelector<IAuthState>('auth');

export const getNewUserSelector = createSelector(
  authFeatureSelector,
  (state) => state.user
);

export const IsLoggedInSelector = createSelector(
  authFeatureSelector,
  (state) => state.IsLoggedIn
);

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (state) => state.isSubmitting
);

export const getBackendErrorsSelector = createSelector(
  authFeatureSelector,
  (state) => state.validationErrors
);
