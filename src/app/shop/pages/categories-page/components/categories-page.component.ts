import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICategory } from 'src/app/shared/types/category.inteface';
import { ISubCategories } from 'src/app/shared/types/subCategories.interface';
import {
  getCategoriesAction,
  setCurrentCategoryAction,
} from '../store/actions/categories.action';
import {
  categoriesDataSelector,
  categoriesIsLoadingSelector,
  categoriesCurrentCategoriesSelector,
  categoriesCurrentCategorySelector,
} from '../store/selectors';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss'],
})
export class CategoriesPageComponent implements OnInit {
  selectedItem: number = 0;
  subscribtionCategories!: Subscription;
  currentSubCategories$!: any;
  currentCategory!: string;
  categories$!: Observable<{ name: string; id: string }[] | undefined>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.fetchData();
    this.initializeValues();
    this.setSelectedItem(this.selectedItem);
  }

  initializeValues() {
    this.categories$ = this.store.pipe(
      select(categoriesDataSelector),
      map((data: ICategory[] | null) => {
        if (data) {
          // set current subcategories
          this.setCurrentSubCategories(data[0].id);
          // set current category
          this.currentCategory = data[0].id;

          return data.map((item) => {
            return {
              name: item.name,
              id: item.id,
            };
          });
        }
        return [];
      })
    );
  }

  fetchData() {
    this.store.dispatch(getCategoriesAction());
  }

  setCurrentCategoryId(categoryId: string) {
    this.currentCategory = categoryId;
    this.setCurrentSubCategories(categoryId);
  }

  setCurrentSubCategories(currentCategoryId: string) {
    this.currentSubCategories$ = this.store.select(
      categoriesCurrentCategoriesSelector(currentCategoryId)
    );

    /* this.store
      .pipe(
        select(categoriesCurrentCategoriesSelector(currentCategoryId)),
        map((data) => {
          this.currentSubCategories$ = data?.subCategories;
        })
      ) */
  }

  setSelectedItem(index: number) {
    this.selectedItem = index;
  }

}
