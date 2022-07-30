import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DLocationPage } from './d-location.page';

const routes: Routes = [
  {
    path: '',
    component: DLocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DLocationPageRoutingModule {}
