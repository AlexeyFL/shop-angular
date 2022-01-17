import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubCategoriesComponent } from './components/sub-categories.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SubCategoriesComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [SubCategoriesComponent],
})
export class SubCategoriesModule {}
