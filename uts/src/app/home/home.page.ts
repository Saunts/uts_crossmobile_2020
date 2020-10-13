import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { PopovercomponentPage } from '../popovercomponent/popovercomponent.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public toastController: ToastController,
    public popoverController: PopoverController) {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Toasted',
      duration: 2000,
      position: "top",
      animated: true
    });
    toast.present();
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopovercomponentPage,
      event: ev,
      translucent: true,
      animated: true, //attribute 1
      mode: "ios" //attribute 2
    });
    return await popover.present();
  }
}
