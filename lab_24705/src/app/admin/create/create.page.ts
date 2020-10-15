import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { item } from 'src/app/home/item.model';
import { ItemService } from './../../home/item.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  
  newitem: item;

  constructor(
    private ItemService: ItemService,
    private router: Router
  ) { }

  ngOnInit() {
     }
    
  addnew(form: NgForm){
    console.log(form);
    if(!form.valid){
      return;
    }
    // this.newitem.foto = form.value.foto;
    // this.newitem.jenis = form.value.jenis;
    // this.newitem.merek = form.value.merek;
    // this.newitem.model = form.value.model;
    // this.newitem.harga = form.value.harga;
    // this.newitem.stok = form.value.stok;

    // if(this.newitem.jenis == 'cpu'){
    //   this.newitem.base = form.value.base;
    //   this.newitem.boost = form.value.boost;
    //   this.newitem.core = form.value.core;
    //   this.newitem.thread = form.value.thread;
    // }
    // else if(this.newitem.jenis == 'ram'){
    //   this.newitem.speed = form.value.speed;
    //   this.newitem.ukuran = form.value.ukuran;
    // }
    // else if(this.newitem.jenis == 'motherboad'){
    //   this.newitem.chipset = form.value.chipset;
    //   this.newitem.targetprocessor = form.value.processor
    // }

    // console.log(this.newitem);

    if(form.value.jenis == 'cpu'){
      var cpu = {
        id: null,
        foto: form.value.foto,
        jenis: form.value.jenis,
        merek: form.value.merek,
        model: form.value.model,
        harga: form.value.harga,
        stok: form.value.stok,
        
        base: form.value.base,
        boost: form.value.boost,
        core: form.value.core,
        thread: form.value.thread
      }
      this.ItemService.addItem(cpu);
    }
    else if(form.value.jenis == 'ram'){
      var ram = {
        id: null,
        foto: form.value.foto,
        jenis: form.value.jenis,
        merek: form.value.merek,
        model: form.value.model,
        harga: form.value.harga,
        stok: form.value.stok,

        speed: form.value.speed,
        ukuran: form.value.ukuran
      }
      this.ItemService.addItem(ram);
    }
    else if(form.value.jenis == 'motherboard'){
      var motherboard = {
        id: null,
        foto: form.value.foto,
        jenis: form.value.jenis,
        merek: form.value.merek,
        model: form.value.model,
        harga: form.value.harga,
        stok: form.value.stok,

        chipset: form.value.chipset,
        targetprocessor: form.value.processor
      }
      this.ItemService.addItem(motherboard);
    }
    else{
      var gpu = {
        id: null,
        foto: form.value.foto,
        jenis: form.value.jenis,
        merek: form.value.merek,
        model: form.value.model,
        harga: form.value.harga,
        stok: form.value.stok
      }
      this.ItemService.addItem(gpu);
    }
    this.router.navigate(['/admin']);
  
  }
}