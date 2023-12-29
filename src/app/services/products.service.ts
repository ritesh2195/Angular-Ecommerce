import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getAllProducts(){

    return JSON.parse(JSON.stringify(require("../../../src/test-data/products.json")))
  }
}
