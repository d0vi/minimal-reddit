import { Component } from '@angular/core';

import { Article } from './article/article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articles: Article[];

  constructor () {
    this.articles = [
      new Article('Angular', 'https://angular.io', 10),
      new Article('Stack Overflow', 'https://stackoverflow.com', 8),
      new Article('Atom', 'https://atom.io', 7)
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement) {
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

}
