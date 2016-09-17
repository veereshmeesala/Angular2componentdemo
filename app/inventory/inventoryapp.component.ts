import { Component } from 'angular2/core';
import { Product } from './product';
import { ProductList } from './productlist.component';

@Component({
    selector: 'inventory-app',
    directives: [ProductList],
    template: `<product-list [productlist]="products" *ngFor="#item of products">
                </product-list>`
})
export class InventoryApp {
    products: Product[];

    constructor() {
       this.products = [
            new Product(
                'MYSHOES', 'Black Running Shoes', '/resources/images/products/black-shoes.jpg', ['Men', 'Shoes', 'Running Shoes'],
                109.99),
            new Product(
                'NEATOJACKET', 'Blue Jacket', '/resources/images/products/blue-jacket.jpg', ['Women', 'Apparel', 'Jackets & Vests'], 238.99),
            new Product(
                'NICEHAT', 'A Nice Black Hat', '/resources/images/products/black-hat.jpg', ['Men', 'Accessories', 'Hats'],
                29.99)
        ];
    }
}