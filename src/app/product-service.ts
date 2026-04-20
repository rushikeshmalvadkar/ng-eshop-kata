import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Product {
  productCode: string;
  name: string;
  price: number;
  isAvailable: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productList = [
    { productCode: 'P1001', name: 'iPhone 15', price: 79999, isAvailable: true },
    { productCode: 'P1002', name: 'Samsung Galaxy S24', price: 69999, isAvailable: true },
    { productCode: 'P1003', name: 'OnePlus 12', price: 59999, isAvailable: false },
    { productCode: 'P1004', name: 'MacBook Air', price: 115000, isAvailable: true },
    { productCode: 'P1005', name: 'Dell Inspiron Laptop', price: 55000, isAvailable: false },
    { productCode: 'P1006', name: 'Sony Headphones', price: 14999, isAvailable: true },
    { productCode: 'P1007', name: 'iPad Air', price: 64999, isAvailable: true },
  ];

  fetchProducts(): Observable<Product[]> {
    return of(this.productList);
  }
}
