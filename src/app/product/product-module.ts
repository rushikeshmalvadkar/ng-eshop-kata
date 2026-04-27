import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductList } from './product-list/product-list';
import { CartSummary } from './cart-summary/cart-summary';
import { ProductRoutingModule } from './product-routing-module';
import { AddProduct } from './add-product/add-product';
import { AppRoutingModule } from "../app-routing-module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductList,
    CartSummary,
    AddProduct
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule
    
    
],
  exports : [ProductList,CartSummary,AddProduct]
})
export class ProductModule { }
