import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { IGood } from 'src/app/shared/types/good.interface';
import { DbService } from 'src/app/shop/services/db/db.service';
import {
  getCategoryGoodsAction,
  getCategoryGoodsSuccessAction,
  getCategoryGoodsFailureAction,
} from '../actions/category-page.action';

@Injectable()
export class GetCategoryGoodsEffect {
  getCategoryGoods$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCategoryGoodsAction),
      switchMap(({ url }) => {
        return this.dbService.fetchCategoryGoods$(url).pipe(
          map((goods: IGood[]) => {
            return getCategoryGoodsSuccessAction({ goods });
          }),

          catchError(() => {
            return of(getCategoryGoodsFailureAction());
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
