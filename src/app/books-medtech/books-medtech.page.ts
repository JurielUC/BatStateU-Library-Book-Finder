import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Platform } from '@ionic/angular';

import { Plugins } from '@capacitor/core';
import { Item, ItemService } from '../books/med-tech/med-tech';

@Component({
  selector: 'app-books-medtech',
  templateUrl: './books-medtech.page.html',
  styleUrls: ['./books-medtech.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BooksMedtechPage implements OnInit {

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
