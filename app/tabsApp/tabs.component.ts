import { Component } from 'angular2/core';

@Component({
    template: ` <h1>{{pageTitle}}</h1>
                <ul>
                <li>Tab 1</li>
                <li>Tab 2</li>
                </ul>`
})
export class TabsComponent {
    pageTitle: string = 'Tabs Component';
}

// http://blog.thoughtram.io/angular/2015/04/09/developing-a-tabs-component-in-angular-2.html