import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksItPage } from './books-it.page';

const routes: Routes = [
  {
    path: '',
    component: BooksItPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksItPageRoutingModule {}
