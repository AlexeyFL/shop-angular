import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, SharedModule],
  exports: [SearchComponent],
})
export class SearchModule {}
