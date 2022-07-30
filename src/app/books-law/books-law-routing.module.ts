import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksLawPage } from './books-law.page';

const routes: Routes = [
  {
    path: '',
    component: BooksLawPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksLawPageRoutingModule {}
