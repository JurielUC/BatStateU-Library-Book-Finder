import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BooksEngineeringPageRoutingModule } from './books-engineering-routing.module';

import { BooksEngineeringPage } from './books-engineering.page';
import { ItemService } from '../books/engineering/engineering';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BooksEngineeringPageRoutingModule,
  ],
  declarations: [BooksEngineeringPage],
  providers: [ItemService]
})
export class BooksEngineeringPageModule {}
