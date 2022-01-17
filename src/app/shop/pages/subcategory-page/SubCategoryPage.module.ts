import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SubCategoryPageComponent } from './components/subCategory-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule],
  declarations: [SubCategoryPageComponent],
})
export default class SubCategoryPageModule {}
