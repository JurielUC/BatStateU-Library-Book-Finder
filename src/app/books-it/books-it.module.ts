import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BooksItPageRoutingModule } from './books-it-routing.module';

import { BooksItPage } from './books-it.page';
import { ItemService } from '../books/info-tech/info-tech';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BooksItPageRoutingModule
  ],
  declarations: [BooksItPage],
  providers: [ItemService]
})
export class BooksItPageModule {}
