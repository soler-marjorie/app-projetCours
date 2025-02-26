import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-user-display-component',
  imports: [],
  templateUrl: './user-display-component.component.html',
  styleUrl: './user-display-component.component.css'
})
export class UserDisplayComponent {
  @Input() user: any;
}
