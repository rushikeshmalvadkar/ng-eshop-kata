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
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }
  fetchProducts(): Product[] {
    const data = localStorage.getItem('products');
    const products: Product[] = data ? JSON.parse(data) : [];
    return products;
  }

  addProduct(product: Product) {
    const data = localStorage.getItem('products');
    const products: Product[] = data ? JSON.parse(data) : [];
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
  }
  removeProduct(productforRemove: Product) {
    const products = this.fetchProducts();
    const updatedProducts = products.filter(
      (product) => product.productCode !== productforRemove.productCode,
    );
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  }

  fetchProductBy(productCode: string) {
    const data = localStorage.getItem('products');
    if (!data) return null;
    const products: Product[] = JSON.parse(data);
    return products.find((p) => p.productCode === productCode) || null;
  }

  updateProduct(updateProduct:Product){
    const products = this.fetchProducts();
    const  productIndex = products.findIndex(product => product.productCode==updateProduct.productCode);
    products[productIndex] = updateProduct;
    localStorage.setItem('products', JSON.stringify(products));
  }
}
