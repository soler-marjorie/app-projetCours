import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OneFriendComponent } from "../../../../components/EXOS/exercice1/one-friend/one-friend.component";

@Component({
  selector: 'app-list-friends',
  imports: [CommonModule, OneFriendComponent],
  templateUrl: './list-friends.component.html',
  styleUrl: './list-friends.component.css'
})

export class ListFriendsComponent {
  friendsList = [
    { name: 'Steven Caplan', city: 'Nice', age: 34, description: 'Développeur passionné', reputation: 30, imageUrl: 'https://www.atlasseo.fr/images/agence-seo/blog/holi-festival-india_750x280.jpg' },
    { name: 'Alice Dupont', city: 'Paris', age: 28, description: 'Designer graphique', reputation: 80, imageUrl: ''},
    { name: 'Mohamed Ali', city: 'Lyon', age: 40, description: 'Ingénieur DevOps', reputation: 65, imageUrl: 'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg'}
  ];

  isButtonDisabled = false;

  constructor() {
    setTimeout(() => {
      this.isButtonDisabled = true;
    }, 3000); 
  }

  //Ajouter un ami
  friendName: string = ''; 
  message: string = 'Aucun ami'; 

  updateFriendName(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.friendName = inputElement.value;
  }

  addFriend() {
    if (this.friendName.trim() !== '') {
      this.message = `Votre ami ${this.friendName} a été ajouté !`;
    } else {
      this.message = "Veuillez entrer un nom d'ami.";
    }
  }
}


