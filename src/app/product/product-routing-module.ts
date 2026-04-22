import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CartSummary } from './cart-summary/cart-summary';
import { ProductList } from './product-list/product-list';

const routes: Routes = [
  { path: '', component: ProductList },
  { path: 'cart-summary', component: CartSummary }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductRoutingModule { }
