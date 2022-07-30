import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Platform } from '@ionic/angular';

import { Plugins } from '@capacitor/core';
import { Item, ItemService } from '../books/info-tech/info-tech';

@Component({
  selector: 'app-books-it',
  templateUrl: './books-it.page.html',
  styleUrls: ['./books-it.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BooksItPage implements OnInit {

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
