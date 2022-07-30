import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Platform } from '@ionic/angular';

import { Plugins } from '@capacitor/core';
import { Item, ItemService } from '../books/law/law';

@Component({
  selector: 'app-books-law',
  templateUrl: './books-law.page.html',
  styleUrls: ['./books-law.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BooksLawPage implements OnInit {

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
