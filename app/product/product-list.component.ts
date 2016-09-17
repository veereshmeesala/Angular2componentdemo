import { Component, OnInit } from 'angular2/core';
import { IProduct } from './product';
import { ProductFilterPipe } from './product-filter.pipe';
import { StarComponent } from '../shared/star.component';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: 'app/product/product-list.component.html',
    styleUrls: ['app/product/product-list.component.css'],
    pipes: [ProductFilterPipe],
    directives: [StarComponent]

})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    products: IProduct[];
    errorMessage: string;

    constructor(private _productService: ProductService){

    }
    
    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log('In OnInit');
        this._productService.getProducts()
            .subscribe(products => this.products = products,
             error => this.errorMessage = <any>error);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
}