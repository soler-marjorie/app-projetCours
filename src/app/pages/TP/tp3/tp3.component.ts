import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tp3',
  imports: [CommonModule],
  templateUrl: './tp3.component.html',
  styleUrl: './tp3.component.css'
})

export class Tp3Component {

  @Input() affichageMessage: string = 'OFF';
  message: string = 'je suis un p'; 

  constructor() {
    this.affichageMessage = Math.random() < 0.5 ? 'ON' : 'OFF';
  }

  addMore() {
    if (this.affichageMessage === 'OFF') {
      this.affichageMessage = 'ON';  // Show the message
    } else {
      this.affichageMessage = 'OFF';  // Hide the message
    }

    if (this.affichageMessage === 'ON' && this.message.trim() === '') {
      this.message = 'Veuillez entrer du contenu.';  // Set message if it's empty
    }
  }


  items: number[] = [];

  addArray(){
    this.items.push(this.items.length + 1);
  }
}
