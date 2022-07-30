import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; //for search
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], //for search reative
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
