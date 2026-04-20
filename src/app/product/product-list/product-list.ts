
import { CartService } from '../../cart-service';
import { ProductService,Product } from '../../product-service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit  {
  
  @Output() addToCart = new EventEmitter<any>();
  productList : Array<Product> | undefined;
  
  constructor(private productService : ProductService,private cartService : CartService){

  }

  ngOnInit(): void {
    this.productService.fetchProducts().subscribe((data)=>{
        this.productList = data;
    })
  }

  onAddToCart(product : Product){
       this.cartService.addToCart(product);
    }

  



}
