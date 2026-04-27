import { Component, OnInit } from '@angular/core';
import { CartItem, CartService } from '../../cart-service';

@Component({
  selector: 'app-cart-summary',
  standalone: false,
  templateUrl: './cart-summary.html',
  styleUrl: './cart-summary.css'
})
export class CartSummary implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {
  
  }

  ngOnInit(): void {
    this.cartService.cart$.subscribe(items =>{
      this.cartItems = items;
    })
  }

  removeItem(item : CartItem){
    this.cartService.removeItem(item);
  }

}
