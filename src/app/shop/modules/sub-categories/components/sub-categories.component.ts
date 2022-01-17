import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Observable } from 'rxjs';
import { cities } from 'src/app/cities';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubCategoriesComponent implements OnInit {
  selectedItem: number = 0;
  @Input() currentSubCategories!: Observable<any>;
  @Input() currentCategory!: string;
  constructor() {}

  ngOnInit(): void {}

  goTo(categoryId: string, subCategoryId: string) {
    console.log(categoryId, subCategoryId);
  }

  setSelectedItem(index: number) {
    this.selectedItem = index;
  }
}
