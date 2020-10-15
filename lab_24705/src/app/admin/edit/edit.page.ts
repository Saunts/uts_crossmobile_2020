import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { item } from 'src/app/home/item.model';
import { ItemService } from './../../home/item.service';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  item: item;
  constructor(
    private ItemService: ItemService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('itemid')) { return ;}
      const itemid = paramMap.get('itemid');
      this.item = this.ItemService.getItem(itemid);
    })
    console.log(this.item);
  }

  edititem(form: NgForm){
    console.log(form);
    if(!form.valid){
      return;
    }
    if(this.item.jenis == 'cpu'){
      var cpu = {
        id: this.item.id,
        foto: form.value.foto,
        jenis: 'cpu',
        merek: form.value.merek,
        model: form.value.model,
        harga: form.value.harga,
        stok: form.value.stok,
        
        base: form.value.base,
        boost: form.value.boost,
        core: form.value.core,
        thread: form.value.thread
      }
      this.ItemService.editItem(cpu);
    }
    else if(this.item.jenis == 'ram'){
      var ram = {
        id: this.item.id,
        foto: form.value.foto,
        jenis: 'ram',
        merek: form.value.merek,
        model: form.value.model,
        harga: form.value.harga,
        stok: form.value.stok,

        speed: form.value.speed,
        ukuran: form.value.ukuran
      }
      this.ItemService.editItem(ram);
    }
    else if(this.item.jenis == 'motherboard'){
      var motherboard = {
        id: this.item.id,
        foto: form.value.foto,
        jenis: 'motherboard',
        merek: form.value.merek,
        model: form.value.model,
        harga: form.value.harga,
        stok: form.value.stok,

        chipset: form.value.chipset,
        targetprocessor: form.value.processor
      }
      this.ItemService.editItem(motherboard);
    }
    else{
      var gpu = {
        id: this.item.id,
        foto: form.value.foto,
        jenis: 'gpu',
        merek: form.value.merek,
        model: form.value.model,
        harga: form.value.harga,
        stok: form.value.stok
      }
      this.ItemService.editItem(gpu);
    }
    this.router.navigate(['/admin']);
  }
}
