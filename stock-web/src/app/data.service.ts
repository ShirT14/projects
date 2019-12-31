import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './Item';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  addItem(item:Item)
  {
    return this.http.put('http://localhost:9999/api/item',item);

  }
  viewAllItems():Observable<Item[]>
  {
     return this.http.get<Item[]>( 'http://localhost:9999/api/stock');
  }
  viewItem(item_no:number):Observable<Item>
  {
    let url:string=`${'http://localhost:9999/api/item/'}${item_no}`;
    return this.http.get<Item>(url);
  }
  delete(item_no:number)
  {
    let url:string=`${'http://localhost:9999/api/delete/'}${item_no}`;
    return this.http.delete(url);
  }
}
