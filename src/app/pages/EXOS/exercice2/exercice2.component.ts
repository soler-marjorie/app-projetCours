import { Component } from '@angular/core';
import { AddArticleComponent } from '../../../components/EXOS/exercice2/add-article/add-article.component';
import { ArticleElementComponent } from '../../../components/EXOS/exercice2/article-element/article-element.component';
import { NgFor } from '@angular/common';

interface Article {
  id: number;
  title: string;
  content: string;
  author: string;
  date: Date;
  type: string;
}

@Component({
  selector: 'app-exercice2',
  imports: [AddArticleComponent, ArticleElementComponent, NgFor],
  templateUrl: './exercice2.component.html',
  styleUrl: './exercice2.component.css'
})
export class Exercice2Component {
  articles: Article[] = [
    {
      id: 1,
      title: 'Mon premier article',
      content: 'Ceci est le contenu de mon premier article.',
      author: 'Auteur 1',
      date: new Date('2023-01-01'),
      type: 'article'
    },
    {
      id: 2,
      title: 'Mon deuxième article',
      content: 'Ceci est le contenu de mon deuxième article.',
      author: 'Auteur 2',
      date: new Date('2023-02-01'),
      type: 'brouillon'
    }
  ];

  // Ajoute un nouvel article avec un ID unique
  onArticleAdded(articleData: { title: string; content: string; author: string; date: Date; type: string }) {
    const newArticle: Article = {
      id: this.articles.length + 1,
      title: articleData.title,
      content: articleData.content,
      author: articleData.author || 'Auteur inconnu', // Auteur par défaut
      date: articleData.date || new Date(),
      type: 'article'
    };
    this.articles.push(newArticle);
  }

  // Ajoute un brouillon avec un ID unique
  onBrouillonAdded(brouillonData: { title: string; content: string; author: string; date: Date; type: string }) {
    const newBrouillon: Article = {
      id: this.articles.length + 1,
      title: brouillonData.title,
      content: brouillonData.content,
      author: brouillonData.author || 'Auteur inconnu',
      date: brouillonData.date || new Date(),
      type: 'brouillon'
    };
    this.articles.push(newBrouillon);
  }
}
