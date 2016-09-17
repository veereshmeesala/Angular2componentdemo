System.register(['angular2/core', './article.component', './article'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, article_component_1, article_1;
    var Reddit;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (article_component_1_1) {
                article_component_1 = article_component_1_1;
            },
            function (article_1_1) {
                article_1 = article_1_1;
            }],
        execute: function() {
            Reddit = (function () {
                function Reddit() {
                    this.articles = [
                        new article_1.Article('Angular 2', 'http://angular.io', 3),
                        new article_1.Article('Fullstack', 'http://fullstack.io', 2),
                        new article_1.Article('Angular Homepage', 'http://angular.io', 1),
                    ];
                }
                Reddit.prototype.addArticle = function (title, link) {
                    console.log("adding article title: " + title.value + " and " + link.value);
                    this.articles.push(new article_1.Article(title.value, link.value, 0));
                    title.value = '';
                    link.value = '';
                };
                Reddit.prototype.sortedArticles = function () {
                    return this.articles.sort(function (a, b) { return b.votes - a.votes; });
                };
                Reddit = __decorate([
                    core_1.Component({
                        directives: [article_component_1.ArticleComponent],
                        templateUrl: 'app/reddit/reddit.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], Reddit);
                return Reddit;
            }());
            exports_1("Reddit", Reddit);
        }
    }
});
//# sourceMappingURL=reddit.component.js.map