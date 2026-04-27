import { BehaviorSubject, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { Product } from './product/product';

export interface CartItem {
  itemCount: number;
  product: Product;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: CartItem[] = [];

  private cartSubject = new BehaviorSubject<CartItem[]>([]);

  cart$ = this.cartSubject.asObservable();

  cartCount$ = this.cart$.pipe(
    map((items: CartItem[]) => items.reduce((total, item) => total + item.itemCount, 0)),
  );

  public addToCart(product: Product) {
    const existingCartItem = this.cartItems.find(
      (item) => item.product.productCode === product.productCode,
    );
    if (existingCartItem) {
      existingCartItem.itemCount = existingCartItem.itemCount + 1;
    } else {
      this.cartItems.push({
        product: product,
        itemCount: 1,
      });
    }

    this.cartSubject.next(this.cartItems);
    console.log(this.cartItems);
  }

  public removeItem(item: CartItem) {
    this.cartItems = this.cartItems.filter(
      (cart) => cart.product.productCode != item.product.productCode,
    );
    this.cartSubject.next(this.cartItems);
  }
}
