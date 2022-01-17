import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ICategory } from 'src/app/shared/types/category.inteface';
import { DbService } from 'src/app/shop/services/db/db.service';
import {
  getCategoriesAction,
  getCategoriesFailureAction,
  getCategoriesSuccessAction,
} from '../actions/categories.action';

@Injectable()
export class GetAllCategoriesEffect {
  getAllCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCategoriesAction),
      switchMap(() => {
        return this.dbService.fetchAllCategories$().pipe(
          map((categories: ICategory[]) => {
            return getCategoriesSuccessAction({ categories });
          }),

          catchError(() => {
            return of(getCategoriesFailureAction());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private dbService: DbService
  ) {}
}
