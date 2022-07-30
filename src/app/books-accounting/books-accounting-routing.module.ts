import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksAccountingPage } from './books-accounting.page';

const routes: Routes = [
  {
    path: '',
    component: BooksAccountingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksAccountingPageRoutingModule {}
