import { Component, OnInit } from '@angular/core';
import { Buku } from './buku.model'
@Component({
  selector: 'app-buku',
  templateUrl: './buku.component.html',
  styleUrls: ['./buku.component.css']
})
export class BukuComponent implements OnInit {
	listBuku : Buku[] = [];
  constructor() { }

  ngOnInit() {
  }

  onBukuChoosen(bukuData : Buku){
  	this.listBuku.push(bukuData);
  }

  onBukuDeleted(i){
    this.listBuku.splice(i,1);
  }
}
