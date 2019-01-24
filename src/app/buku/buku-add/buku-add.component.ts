import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Buku } from '../buku.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-buku-add',
  templateUrl: './buku-add.component.html',
  styleUrls: ['./buku-add.component.css']
})
export class BukuAddComponent implements OnInit {
  // inputData = new Buku();
  @Output() bukuPilih = new EventEmitter<Buku>();
  
  bukuForm : FormGroup;
  constructor() { }

  ngOnInit() {
    this.bukuForm = new FormGroup({
      isbn : new FormControl(null,[Validators.required,Validators.minLength(3)]),
      nama : new FormControl(null,[Validators.required,Validators.minLength(2)]),
      qty : new FormControl(null,[Validators.required])
    });
  }

  pilih(){
   // this.inputData = new Buku();
   const buku = new Buku();
   buku.isbn = this.bukuForm.get('isbn').value;
   buku.nama = this.bukuForm.get('nama').value;
   buku.qty = this.bukuForm.get('qty').value;
   console.log(buku);
   this.bukuPilih.emit(buku);
  }
}
