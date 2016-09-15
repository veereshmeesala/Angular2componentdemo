import { Component } from 'angular2/core';
import { Reddit } from './reddit/reddit.component';

@Component({
    selector: 'task-app',
    providers: [],
    services: [],
    directives: [Reddit],
    templateUrl: 'app/app.component.html'     
})
export class AppComponent{
    name: string;
    movies:string[];

    constructor() {
        this.name = 'world';
        this.movies = ['king', 'Queen', 'Game of thrones'];
    }
}