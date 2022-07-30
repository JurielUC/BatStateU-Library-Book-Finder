import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPageRoutingModule } from './detail-routing.module';

import { DetailPage } from './detail.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    DetailPageRoutingModule
  ],
  declarations: [DetailPage],
  entryComponents: [DetailPage]
})
export class DetailPageModule {}
