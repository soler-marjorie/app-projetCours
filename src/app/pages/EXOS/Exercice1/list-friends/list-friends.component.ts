import { Component } from '@angular/core';

import { OneFriendComponent } from "../../../../components/EXOS/exercice1/one-friend/one-friend.component";

@Component({
  selector: 'app-list-friends',
  imports: [OneFriendComponent],
  templateUrl: './list-friends.component.html',
  styleUrl: './list-friends.component.css'
})

export class ListFriendsComponent {
  friendsList = [
    { name: 'Steven Caplan', city: 'Nice', age: 34, description: 'Développeur passionné', reputation: 30 },
    { name: 'Alice Dupont', city: 'Paris', age: 28, description: 'Designer graphique', reputation: 80 },
    { name: 'Mohamed Ali', city: 'Lyon', age: 40, description: 'Ingénieur DevOps', reputation: 65 }
  ];
}
