import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { Reddit } from './reddit/reddit.component';
import { TabsComponent } from './tabsApp/tabs.component';
import { ProductListComponent } from './product/product-list.component';
import { ProductService } from './product/product.service';

@Component({
    selector: 'task-app',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS, ProductService],
    templateUrl: 'app/app.component.html'     
})
@RouteConfig([
    { path: '/reddit', name: 'Reddit', component: Reddit, useAsDefault: true},
    { path: '/tabs', name: 'Tabs', component: TabsComponent },
    { path: '/products', name: 'ProductList', component: ProductListComponent}
])
export class AppComponent{
    constructor() {}  
}