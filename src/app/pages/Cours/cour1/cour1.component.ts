import { Component } from '@angular/core';

@Component({
  selector: 'app-cour1',
  imports: [],
  templateUrl: './cour1.component.html',
  styleUrl: './cour1.component.css'
})
export class Cour1Component {
  title: string = `Bienvenue dans le tuto Angular! sur le text interpolation`;
  description: string = 'La text interpolation vous permet d\'afficher des données dynamiques dans votre template.';
  currentDate: Date = new Date();
  username: string = 'John Doe';
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];

  // Méthode appelée dans le template
  getWelcomeMessage(): string {
    return `Bienvenue, ${this.username}, dans cette leçon d'Angular!`;
  }
}