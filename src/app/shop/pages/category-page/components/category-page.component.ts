import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { IGood } from 'src/app/shared/types/good.interface';
import { getCategoryGoodsAction } from '../store/actions/category-page.action';
import {
  categoryPageGoodsSelector,
  categoryPageIsLoadingSelector,
} from '../store/selectors';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss'],
})
export class CategoryPageComponent implements OnInit, OnDestroy {
  routeSubscription!: Subscription;
  goods$!: Observable<IGood[] | null>;
  isLoading$!: Observable<any>;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.initializeValues();
    this.fetchGoods();
  }
  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

  initializeValues() {
    this.goods$ = this.store.pipe(select(categoryPageGoodsSelector));
    this.isLoading$ = this.store.pipe(select(categoryPageIsLoadingSelector));
  }

  fetchGoods() {
    this.routeSubscription = this.route.params
      .pipe(
        map((url) => {
          this.store.dispatch(getCategoryGoodsAction({ url: url.categoryId }));
        })
      )
      .subscribe();
  }
}
