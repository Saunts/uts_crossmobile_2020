import { Component } from '@angular/core';
import { ItemService } from './item.service';
import { item } from './item.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items: item[];
  constructor(private itemservice: ItemService) {}

  ngOnInit(){
    this.items = this.itemservice.getAllItem();
  }
}
