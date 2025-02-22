import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-one-friend',
  imports: [CommonModule ],
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
  @Input() oneFriendStyle: string = 'OFF';

  getReputation(): string {
    return this.reputation > 50 ? 'Cool 😎' : 'Ringard 😅';
  }

  constructor() {
    this.oneFriendStyle = Math.random() < 0.5 ? 'ON' : 'OFF';
  }

  getColor():string{
    return this.oneFriendStyle === 'OFF' ? 'lightgray' : 'lightgreen';
  }
}


