import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { WishItemsComponent } from './wish-items.component';

@NgModule({
  declarations: [WishItemsComponent],
  exports: [WishItemsComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class WishItemsModule {}
