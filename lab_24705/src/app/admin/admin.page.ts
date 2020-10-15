import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { item } from '../home/item.model';
import { ItemService } from '../home/item.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  items: item[];
  constructor(
    private itemservice: ItemService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alertCtrl: AlertController) {}

  ngOnInit(){
    this.items = this.itemservice.getAllItem();
  }

  deleteItem(itemId: string){
    this.itemservice.deleteItem(itemId);
    this.items = this.itemservice.getAllItem();
  }

  async presentAlert(itemId: string){
    const alert = await this.alertCtrl.create({
      header: 'Deleting Item',
      message: 'Delete this item?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => this.deleteItem(itemId)
        }
      ]
    });
    await alert.present();
  }

}
