import { CartService } from '../../cart-service';
import { ProductService } from '../../product-service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {
  @Output() addToCart = new EventEmitter<any>();
  productList: Array<Product> | undefined;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
  ) {}

  ngOnInit(): void {
    this.productList =  this.productService.fetchProducts();
  }

  onAddToCart(product: Product) {
    this.cartService.addToCart(product);
  }
  removeProduct(prduct: Product) {
    this.productService.removeProduct(prduct);
    console.log('remove');
    this.productList = this.productService.fetchProducts();
  }
}
