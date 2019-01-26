import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Buku } from '../buku.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ItemServiceService } from '../../item-service.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-buku-add',
  templateUrl: './buku-add.component.html',
  styleUrls: ['./buku-add.component.css'],
  providers : [ItemServiceService]
})
export class BukuAddComponent implements OnInit {
  // inputData = new Buku();

  private idx : string;
  private sub : Subscription;  
  parentTalk : string;
  bukuForm : FormGroup;

  getId(id){
    this.idx = id;
    console.log('idx'+id);
    this.ngOnInit();
  }

  constructor(private service : ItemServiceService, private route : ActivatedRoute) { 
    this.sub = this.route.params.subscribe(params =>{
      this.idx = params['id'];
    })
  this.bukuForm = new FormGroup({
      name : new FormControl(null,[Validators.required,Validators.minLength(2)]),
      qty : new FormControl(null,[Validators.required]),
      price : new FormControl(null,[Validators.required]),
    });
}

  ngOnInit() {
    if(this.idx){
      this.service.getItem(this.idx).subscribe(data =>{
        this.bukuForm = new FormGroup({
      name : new FormControl(data.name,[Validators.required,Validators.minLength(2)]),
      qty : new FormControl(data.qty,[Validators.required]),
      price : new FormControl(data.price,[Validators.required]),
    });
      });
    }
  }

  pilih(){
   // this.inputData = new Buku();
   const buku = new Buku();
   buku.name = this.bukuForm.get('nama').value;
   buku.qty = this.bukuForm.get('qty').value;
   buku.price = this.bukuForm.get('price').value;
   console.log(buku);
   this.service.simpanItem(buku).subscribe(data => {
     alert("Berhasil Input");
     this.parentTalk = data.id;
   });
  }
}
