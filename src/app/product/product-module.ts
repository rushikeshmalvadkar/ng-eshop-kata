import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductList } from './product-list/product-list';
import { CartSummary } from './cart-summary/cart-summary';
import { ProductRoutingModule } from './product-routing-module';



@NgModule({
  declarations: [
    ProductList,
    CartSummary
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  exports : [ProductList,CartSummary]
})
export class ProductModule { }
