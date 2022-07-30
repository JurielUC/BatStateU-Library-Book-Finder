import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Platform } from '@ionic/angular';

import { Plugins } from '@capacitor/core';
import { Item, ItemService } from '../books/engineering/engineering';

@Component({
  selector: 'app-books-engineering',
  templateUrl: './books-engineering.page.html',
  styleUrls: ['./books-engineering.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BooksEngineeringPage implements OnInit {

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
