import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BooksLawPageRoutingModule } from './books-law-routing.module';

import { BooksLawPage } from './books-law.page';
import { ItemService } from '../books/law/law';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BooksLawPageRoutingModule
  ],
  declarations: [BooksLawPage],
  providers: [ItemService]
})
export class BooksLawPageModule {}
