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
