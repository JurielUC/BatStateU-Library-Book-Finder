import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DLocationPageRoutingModule } from './d-location-routing.module';

import { DLocationPage } from './d-location.page'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DLocationPageRoutingModule,
  ],
  declarations: [DLocationPage],
  entryComponents: [DLocationPage]
})
export class DLocationPageModule {}
