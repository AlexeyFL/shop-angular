import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-subcategory-page',
  templateUrl: './subCategory-page.component.html',
  styleUrls: ['./subCategory-page.component.scss'],
})
export class SubCategoryPageComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}
}
