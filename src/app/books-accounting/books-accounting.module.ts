import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BooksAccountingPageRoutingModule } from './books-accounting-routing.module';

import { BooksAccountingPage } from './books-accounting.page';
import { ItemService } from '../books/accounting/accounting';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BooksAccountingPageRoutingModule
  ],
  declarations: [BooksAccountingPage],
  providers: [ItemService]
})
export class BooksAccountingPageModule {}
