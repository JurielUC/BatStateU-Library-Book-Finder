import { Component,  OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { IonSearchbar, LoadingController, Platform } from '@ionic/angular';

import { Plugins } from '@capacitor/core';
import { Item, ItemService } from '../books/books';
@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainPage implements OnInit {

  @ViewChild('search', { static: false }) search: IonSearchbar;

  public items: Array<Object> = []; //variable declaration
  private searchedItem: any;        //variable declaration
  
  constructor(private platform: Platform, public itemService: ItemService, private loadingCtrl: LoadingController) {
    
    //code for calling data to html file
    this
        .itemService
        .itemsData
        .subscribe((items: Item[]) => {
          this.items = items;
        });

      this.itemService.getAllItems();
      this.searchedItem = this.items;
  }
  //code for loading
  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      duration: 1000,
      spinner: 'circles'
    });
    
    loading.present();
  }

  ngOnInit() {

  }

  _ionChange(event) {
    const val = event.target.value;
    //codes for searching books
    this.searchedItem = this.items;
    if (val && val.trim() != '') {
      this.searchedItem = this.searchedItem.filter((item: any) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  

}
