import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/data.service';
import { Item } from 'src/app/Item';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
public stockItems:Item[];
  constructor(private data:DataService) { }

  ngOnInit() {
    this.getAllItems();
  }

  getAllItems()
  {
    this.data.viewAllItems().subscribe(items=>{
      this.stockItems=items;
      console.log(items);
      
    },
      err=>{alert("Couldn't load the Items");
    })
  }
  
  deleteItem(item_no:number)
  {
    this.data.delete(item_no).subscribe(data=>
      {
        alert("Item number "+item_no+"deleted successfuly");},
        err=>{alert("Couldn't delete the item number "+item_no );

        
      })
  }
}
