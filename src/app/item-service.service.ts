import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Buku } from './buku/Buku.model';

@Injectable()
export class ItemServiceService {

  constructor(private http : HttpClient) { }

  getListItem() : Observable<Buku[]>{
  	return this.http.get<Buku[]>(environment.basePath+'/api/item/');
  }

  simpanItem(item : Buku):Observable<Buku>{
  	console.log( this.http.post<Buku>(environment.basePath+"/api/item/",item));
  	return this.http.post<Buku>(environment.basePath+"/api/item/",item);
  }

  getItem(id:string):Observable<Buku> {
  	return this.http.get<Buku>(environment.basePath+'/api/item/'+id);
  }
}
