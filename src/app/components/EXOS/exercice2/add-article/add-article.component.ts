import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-add-article',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.css'
})
export class AddArticleComponent {
  @Output() articleCreated = new EventEmitter();
  @Output() brouillonCreated = new EventEmitter();

  title: string = '';
  content: string = '';
  author: string = '';

  createArticle() {
    if (this.title.trim() && this.content.trim()) {
      this.articleCreated.emit({
        title: this.title,
        content: this.content,
        author: this.author || 'Auteur inconnu',
        date: new Date(),
        type: 'article'
      });
      this.resetForm();
    }
  }

  createBrouillon() {
    if (this.title.trim() && this.content.trim()) {
      this.brouillonCreated.emit({
        title: this.title,
        content: this.content,
        author: this.author || 'Auteur inconnu',
        date: new Date(),
        type: 'brouillon'
      });
      this.resetForm();
    }
  }

  resetForm() {
    this.title = '';
    this.content = '';
    this.author = '';
  }
}
