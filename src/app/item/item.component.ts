import { Component, OnInit } from '@angular/core';
import { Item } from '../model/item.model';
import { ItemServiceService } from '../item-service.service';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private service : ItemServiceService) { }

  
  ngOnInit() {
  	
  }

}
