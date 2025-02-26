import { Component } from '@angular/core';

import { UserFormComponent } from '../../../../components/TP/tp4/user-form-component/user-form-component.component';
import { UserDisplayComponent } from '../../../../components/TP/tp4/user-display-component/user-display-component.component'; 

@Component({
  selector: 'app-user-profile-component',
  imports: [UserFormComponent, UserDisplayComponent],
  templateUrl: './user-profile-component.component.html',
  styleUrl: './user-profile-component.component.css'
})
export class UserProfileComponentComponent {
  user = {
    name: 'Gérard',
    age: 45
  };

  updateUser(updatedUser: any) {
    this.user = updatedUser; 
  }
}
