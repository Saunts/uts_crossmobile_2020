import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from './../item.service';
import { item } from './../item.model';


@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {
  item: item;
  constructor(
    private itemservice: ItemService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('itemid')) { return ;}
      const itemid = paramMap.get('itemid');
      this.item = this.itemservice.getItem(itemid);
    })
  }

}
