import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Platform } from '@ionic/angular';

import { Plugins } from '@capacitor/core';
import { Item, ItemService } from '../books/accounting/accounting';

@Component({
  selector: 'app-books-accounting',
  templateUrl: './books-accounting.page.html',
  styleUrls: ['./books-accounting.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BooksAccountingPage implements OnInit {

  items: Item[];

  constructor(private platform: Platform, public itemService: ItemService) {
    this
        .itemService
        .itemsData
        .subscribe((items: Item[]) => {
          this.items = items;
        });

      this.itemService.getAllItems();
   }

  ngOnInit() {
  }

}
