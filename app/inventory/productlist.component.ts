import { Component } from 'angular2/core';
import { Product } from './Product';

@Component({
    selector: 'product-list',
    inputs: ['productlist'],
    templateUrl: 'app/inventoryApp/productlist.component.html'
})
export class ProductList {
    productlist: Product;

    constructor() {
    }
}