import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart-service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  cartCount: any;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartCount = this.cartService.cartCount$;
  }
}
