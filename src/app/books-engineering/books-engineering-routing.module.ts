import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { BooksEngineeringPage } from './books-engineering.page';

const routes: Routes = [
  {
    path: '',
    component: BooksEngineeringPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule],
})
export class BooksEngineeringPageRoutingModule {}
