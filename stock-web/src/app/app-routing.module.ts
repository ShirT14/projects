import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from './components/item/item.component';
import { StockComponent } from './components/stock/stock.component';

const routes: Routes = [
  { path:"item/:id" ,component:ItemComponent},
  {path: "stock" ,component:StockComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
