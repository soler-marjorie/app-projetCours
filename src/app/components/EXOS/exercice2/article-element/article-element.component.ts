import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-element',
  imports: [CommonModule],
  templateUrl: './article-element.component.html',
  styleUrl: './article-element.component.css'
})
export class ArticleElementComponent {
  @Input() article!: { id: number; title: string; content: string; author: string; date: Date; type: string };

}
