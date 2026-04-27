import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CartSummary } from './cart-summary/cart-summary';
import { ProductList } from './product-list/product-list';
import { AddProduct } from './add-product/add-product';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductList },
  { path: 'cart-summary', component: CartSummary },
  { path: 'add-product', component: AddProduct },
  { path: 'products/edit/:id', component: AddProduct },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
   exports: [RouterModule],
})
export class ProductRoutingModule {}
