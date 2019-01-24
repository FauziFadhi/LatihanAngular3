import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Buku } from '../buku.model';
@Component({
  selector: 'app-buku-list',
  templateUrl: './buku-list.component.html',
  styleUrls: ['./buku-list.component.css']
})
export class BukuListComponent implements OnInit {

  @Input() bukuList : Buku[];

  @Output() bukuDelete = new EventEmitter<Buku>();
  constructor() { }

  ngOnInit() {
  }

  deleteItem(i){
  	this.bukuDelete.emit(i);
  }

  total() : number{
    var total = 0;
    for (var i = 0; i < this.bukuList.length; i++) {
      total = total + this.bukuList[i].qty.valueOf();
    }
    console.log(total);
    return total;
  }
}
