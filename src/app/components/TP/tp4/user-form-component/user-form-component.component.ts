import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-user-form-component',
  imports: [FormsModule],
  templateUrl: './user-form-component.component.html',
  styleUrl: './user-form-component.component.css'
})
export class UserFormComponent {
  @Output() userUpdated = new EventEmitter<any>();

  name: string = '';
  age: number | null = null;

  updateUser() {
    const updatedUser = {
      name: this.name,
      age: this.age
    };
    this.userUpdated.emit(updatedUser); // Émission des nouvelles valeurs
  }
}
