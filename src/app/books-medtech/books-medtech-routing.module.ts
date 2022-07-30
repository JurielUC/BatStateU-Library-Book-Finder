import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksMedtechPage } from './books-medtech.page';

const routes: Routes = [
  {
    path: '',
    component: BooksMedtechPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksMedtechPageRoutingModule {}
