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
    { name: 'Steven Caplan', city: 'Nice', age: 34, description: 'Développeur passionné', reputation: 30, imageUrl: 'https://nextjourneys.com/wp-content/uploads/2017/07/4k-nature-wallpaper-images-Is-Cool-Wallpapers-e1499358589400.jpg' },
    { name: 'Alice Dupont', city: 'Paris', age: 28, description: 'Designer graphique', reputation: 80, imageUrl: ''},
    { name: 'Mohamed Ali', city: 'Lyon', age: 40, description: 'Ingénieur DevOps', reputation: 65, imageUrl: 'https://www.drsebaa.com/wp-content/uploads/2019/03/spring-bird-2295436_1280.jpg'}
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


  listFriendsTab: { name: string; age: number; email: string }[] = [
    { name: 'Alice', age: 30, email: 'alice@example.com' },
    { name: 'Bob', age: 25, email: 'bob@example.com' },
    { name: 'Charlie', age: 35, email: 'charlie@example.com' }
  ];
}


