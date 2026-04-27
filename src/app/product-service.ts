import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Product } from './product/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private storageKey = 'products';
  private productsSubject = new BehaviorSubject<Product[]>(this.loadFromStorage());
  products$ = this.productsSubject.asObservable();

  private loadFromStorage(): Product[] {
    const products = localStorage.getItem(this.storageKey);
    return products ? JSON.parse(products) : [];
  }

  fetchProducts(): Product[] {
    return this.productsSubject.getValue();
  }

  addProduct(product: Product) {
    const data = localStorage.getItem('products');
    const products: Product[] = data ? JSON.parse(data) : [];
    products.push(product);
    this.updateProductStateInLocalStorage(products);
  }
  generateProductCode(): string {
    const random = Math.floor(1000 + Math.random() * 9000);
    return `PROD-${random}`;
  }

  removeProduct(productforRemove: Product) {
    const products = this.fetchProducts();
    const updatedProducts = products.filter(
      (product) => product.productCode !== productforRemove.productCode,
    );
    this.updateProductStateInLocalStorage(updatedProducts);
  }
  private updateProductStateInLocalStorage(products: Product[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(products));
    this.productsSubject.next(products);
  }
}
