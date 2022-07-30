import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item, ItemService } from '../books/books';

@Component({
  selector: 'app-d-location',
  templateUrl: './d-location.page.html',
  styleUrls: ['./d-location.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DLocationPage implements OnInit {

  item: Item;

  constructor(private route: ActivatedRoute, public itemService: ItemService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    // console.log('ionViewWillEnter');
    // console.log('this.route.snapshot', this.route.snapshot);
    const itemId = this.route.snapshot.paramMap.get('id');
    // console.log('itemId', itemId);
    this.item = this.itemService.getItem(itemId);
  }

}
