import { Injectable } from '@angular/core';
import { item } from './item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private item: item[] = [{
      id: '1',
      foto: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bhphotovideo.com%2Fimages%2Fimages2500x2500%2Fintel_bx80662i76700_6th_gen_i7_6700_1176279.jpg&f=1&nofb=1',
      jenis: 'cpu',
      merek: 'Intel',
      model: 'i7-6700',
      harga: 1000,
      stok: 10,
      base: 2.8,
      boost: 3.5,
      core: 4,
      thread: 8      
    },
    {
      id: '2',
      foto: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.doocacommerce.com.br%2Fchipart%2Fproduct%2Fintel-core-i9-9900k-3-6-ghz-5-0-ghz-turbo-lga-1151-bx80684i99900k-1542208377801_1000x1000%2Bfill_ffffff.jpg&f=1&nofb=1',
      jenis: 'cpu',
      merek: 'Intel',
      model: 'i9-9900',
      harga: 3000,
      stok: 2,
      base: 5,
      boost: 6,
      core: 16,
      thread: 64      
    },
    {
    id: '3',
    foto: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fbrain-images.cdn.dixons.com%2F7%2F5%2F21019357%2Fu_21019357.jpg&f=1&nofb=1',
    jenis: 'ram',
    merek: 'Corsair',
    model: 'CML8GX3M2A1600C9 DDR3',
    harga: 500,
    stok: 10,
    speed: 200,
    ukuran: 10
    },
    {
    id: '4',
    foto: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.ebayimg.com%2Fimages%2Fi%2F270755977703-0-1%2Fs-l1000.jpg&f=1&nofb=1',
    jenis: 'motherboard',
    merek: 'Intel',
    model: 'SE7525RP2',
    harga: 150,
    stok: 20,
    chipset: 'i7-6700',
    targetprocessor: 'Intel' 
    },
    {
    id: '5',
    foto: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Ftwinfinite.net%2Fwp-content%2Fuploads%2F2020%2F09%2FNvidia-RTX-3080-5.jpg%3Ffit%3D1920%252C1080%26ssl%3D1&f=1&nofb=1',
    jenis: 'gpu',
    merek: 'nVidia',
    model: 'GeForce RTX 3080',
    harga: 2000,
    stok: 5
  }];
  constructor() { }

  getAllItem(){
    
    var allitem: item[];
    if(localStorage.getItem('items') === null){
      localStorage.setItem('items', JSON.stringify(this.item));
      console.log("init");
      console.log(localStorage.getItem('items'));
      allitem = this.item;
    }
    else{
      allitem = JSON.parse(localStorage.getItem('items'));
      console.log("local");
      console.log(allitem);
    }
    return [...allitem];
  }

  getItem(itemId: string){
    return {...this.item.find( item=>{
      return item.id === itemId;
    })}
  }

  deleteItem(itemId: string){
    var allitem: item[];
    allitem = JSON.parse(localStorage.getItem('items'));
    localStorage.removeItem('items');
    var index = allitem.map(function(e) {return e.id}).indexOf(itemId);
    allitem.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(allitem));
  }

  addItem(newitem: item){
    var allitem: item[];
    newitem.id = String(this.item.length + 1);
    console.log(newitem);
    allitem = JSON.parse(localStorage.getItem('items'));
    localStorage.removeItem('items');
    allitem.push(newitem);
    localStorage.setItem('items', JSON.stringify(allitem));
  }

  editItem(editedItem: item){
    var allitem: item[];
    allitem = JSON.parse(localStorage.getItem('items'));
    localStorage.removeItem('items');
    var index = allitem.map(function(e) {return e.id}).indexOf(editedItem.id);
    console.log(index);
    editedItem.id = String(index + 1);
    allitem.splice(index, 1);
    allitem.push(editedItem);
    console.log(allitem);
    localStorage.setItem('items', JSON.stringify(allitem));
  }

}
