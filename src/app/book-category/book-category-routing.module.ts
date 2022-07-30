import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookCategoryPage } from './book-category.page';

const routes: Routes = [
  {
    path: '',
    component: BookCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookCategoryPageRoutingModule {}
