import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-book-category',
  templateUrl: './book-category.page.html',
  styleUrls: ['./book-category.page.scss'],
})
export class BookCategoryPage implements OnInit {

  constructor(private alertController: AlertController, private loadingCtrl: LoadingController) { }
  // alert for no books available
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Message',
      subHeader: 'No books available',
      message: 'Try again later.',
      buttons: ['OK']
    });

    await alert.present();
  }
  // code for loading
  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      duration: 2000,
      spinner: 'circles'
    });
    
    loading.present();
  }

  ngOnInit() {
  }

}
