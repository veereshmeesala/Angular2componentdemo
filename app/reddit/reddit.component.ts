import { Component } from 'angular2/core';
import { ArticleComponent } from '../article/article.component';
import { Article } from '../article/article';

@Component({
    selector: 'reddit',
    directives: [ArticleComponent],
    templateUrl: 'app/reddit/reddit.component.html'
})
export class Reddit {
    articles: Article[];

    constructor() {
    this.articles = [
      new Article('Angular 2', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1),
    ];
  }

    addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
        console.log(`adding article title: ${title.value} and ${link.value}`);
        this.articles.push(new Article(title.value, link.value, 0));
        title.value = '';
        link.value = '';
    }

    sortedArticles(): Article[] {
        return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
    }
}