import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookCategoryPageRoutingModule } from './book-category-routing.module';

import { BookCategoryPage } from './book-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookCategoryPageRoutingModule
  ],
  declarations: [BookCategoryPage]
})
export class BookCategoryPageModule {}
