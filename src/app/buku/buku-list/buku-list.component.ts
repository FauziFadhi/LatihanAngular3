import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Buku } from '../buku.model';
import { ItemServiceService } from '../../item-service.service';
@Component({
  selector: 'app-buku-list',
  templateUrl: './buku-list.component.html',
  styleUrls: ['./buku-list.component.css'],
  providers : [ItemServiceService]

})
export class BukuListComponent implements OnInit, OnChanges {

  constructor(private service : ItemServiceService) { }
  @Input() childListen : string;

  @Output() id = new EventEmitter<String>();
  items : Buku[];
  ngOnInit() {

    this.service.getListItem().subscribe(data => {
      console.log(data);
      this.items = data;
    });
    console.log(this.items);
  }

  edit(id){
    console.log('buku list'+id);
    this.id.emit(id);
  }

  ngOnChanges(){
    console.log(this.childListen);
    this.ngOnInit();
  }

}
