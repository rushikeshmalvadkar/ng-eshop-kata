import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../product-service';
import { Product } from '../product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  standalone: false,
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct implements OnInit {
  product: Product;
  mode: 'add' | 'edit' = 'add';
  nameErrorMessage = '';
  priceErrorMessage = '';
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.product = new Product();
  }

  ngOnInit(): void {
    const productCode = this.route.snapshot.paramMap.get('id');
    if (productCode) {
      this.mode = 'edit';
      const product = this.productBy(productCode);
      if (product) {
        this.product = product;
      }
    } else {
      this.mode = 'add';
    }
  }

  private productBy(productCode: string) {
    return this.productService.fetchProductBy(productCode);
  }

  submitForm() {
    if (this.mode === 'edit') {
      this.productService.updateProduct(this.product);
      console.log('edit');
    } else {
      this.product.generateProductCode();
      console.log(this.product);
      this.productService.addProduct(this.product);
    }
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
