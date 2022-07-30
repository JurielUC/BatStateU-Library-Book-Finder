import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DLocationPageRoutingModule } from './d-location-routing.module';

import { DLocationPage } from './d-location.page'

import { PdfViewerModule } from 'ng2-pdf-viewer';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DLocationPageRoutingModule,
    PdfViewerModule
  ],
  declarations: [DLocationPage],
  entryComponents: [DLocationPage]
})
export class DLocationPageModule {}
