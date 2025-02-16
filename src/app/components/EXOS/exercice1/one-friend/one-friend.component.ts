import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-one-friend',
  imports: [],
  templateUrl: './one-friend.component.html',
  styleUrl: './one-friend.component.css'
})
export class OneFriendComponent {
  
  @Input() name!: string;
  @Input() city!: string;
  @Input() age!: number;
  @Input() description!: string;
  @Input() reputation!: number;

  @Input() imageUrl?: string = 'https://picsum.photos/seed/picsum/150/150';

  getReputation(): string {
    return this.reputation > 50 ? 'Cool 😎' : 'Ringard 😅';
  }
}
