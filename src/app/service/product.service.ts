import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product:any = [
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

  findProductById(id) {
    return this.product(id)
    
  }
}
