import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodComponent } from './components/good.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CutStringPipe } from 'src/app/shared/pipes/gutStringPipe';

@NgModule({
  declarations: [GoodComponent, CutStringPipe],
  imports: [CommonModule, SharedModule],
  exports: [GoodComponent],
})
export class GoodModule {}
