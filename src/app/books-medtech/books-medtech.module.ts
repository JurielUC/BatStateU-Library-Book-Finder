import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BooksMedtechPageRoutingModule } from './books-medtech-routing.module';

import { BooksMedtechPage } from './books-medtech.page';
import { ItemService } from '../books/med-tech/med-tech';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BooksMedtechPageRoutingModule
  ],
  declarations: [BooksMedtechPage],
  providers: [ItemService]
})
export class BooksMedtechPageModule {}
