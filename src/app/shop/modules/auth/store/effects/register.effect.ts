import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { IUser } from 'src/app/shared/types/user.interface';
import { DbService } from 'src/app/shop/services/db/db.service';
import {
  registerAction,
  registerSuccessAction,
  registerFailureAction,
} from '../actions/auth.action';
import { IToken } from 'src/app/shared/types/registerUser.interface';
import { Router } from '@angular/router';

@Injectable()
export class RegisterEffect {
  reigister$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) => {
        return this.dbService.registerUser$(request).pipe(
          map((userToken: IToken) => {
            this.dbService.setToken(userToken.token);
            this.persistanceService.set('userToken', userToken.token);
          }),
          switchMap(() => {
            return this.dbService.fetchUserInfo$();
          }),
          map((user: IUser) => {
            return registerSuccessAction({ user });
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(registerFailureAction({ errors: errorResponse.error }));
          })
        );
      })
    )
  );

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/');
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private dbService: DbService,
    private persistanceService: PersistanceService,
    private router: Router
  ) {}
}
