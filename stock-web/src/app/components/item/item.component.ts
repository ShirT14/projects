import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Item } from 'src/app/Item';
import { RouterOutlet, ActivatedRoute } from '@angular/router';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { NG_VALIDATORS, ɵNgNoValidate } from '@angular/forms';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
item:Item;
isAdd=true;
isValid=false;
  constructor(private data:DataService, private router:ActivatedRoute) { }

  ngOnInit() {
    const id=this.router.snapshot.params.id;
   if(id!=0){
    this.getItem(id);
    this.isAdd=false;
   }
    else
    this.item=new Item();
  }
getItem(id:number)
{
this.data.viewItem(id).subscribe(item=>{
  this.item=item;
console.log(this.item)}
  ,err=>{alert("couldn't load the item");
})
}
addItem(item:Item)
{
  
  this.data.addItem(item).subscribe(data=>
    {alert(JSON.stringify(item)+"added")},
    err=> alert("coudn't add this item"));
}
}
