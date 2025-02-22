import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-tp2',
  imports: [FormsModule],
  templateUrl: './tp2.component.html',
  styleUrl: './tp2.component.css'
})
export class Tp2Component {
  userName: string = '';

  resetUserName() {
    this.userName = '';
  }
}
