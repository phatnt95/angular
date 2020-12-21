import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products:any = [
    {
      "id": 1,
      "name": "sp1"
    },
    {
      "id": 1,
      "name": "sp2"
    }
  ]
  constructor() { }
  getProductList(): Observable<Product[]> {
    return of(this.products).pipe(delay(50));
  }

  findProductById(id: string): Observable<Product> {
    const product = this.products.find(p => p.id === id);
    if (product) {
      return of(product).pipe(delay(50));
    } else {
      return throwError(new Error('404 Not Found'));
    }
  }
}
