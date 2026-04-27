import { Router } from '@angular/router';
import { ProductService } from '../../product-service';
import { Product } from '../product';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  standalone: false,
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {
  product: Product;

  nameErrorMessage = '';
  priceErrorMessage = '';

  constructor(
    private productService: ProductService,
    private router: Router,
  ) {
    this.product = new Product();
  }

  submitForm() {
    this.product.productCode = this.productService.generateProductCode();
    this.productService.addProduct(this.product);
    this.router.navigate(['./products']);
  }

  validation(): boolean {
    //    const pricePattern = /^[0-9]+(\.[0-9]+)?$/;

    //   if(!this.name || this.name.length==0){
    //     this.nameErrorMessage = 'Name is required';
    //     return false;
    //   }

    //   if(this.price=='' || !pricePattern.test(this.price) ){
    //       this.priceErrorMessage = 'Price must be a valid number (digits or decimal)';
    //       return false;
    //   }
    return true;
  }

  reset() {}
}
