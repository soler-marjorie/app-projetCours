import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
//import { AppComponent } from './app/app.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavigationComponent } from './app/components/navigation/navigation.component';
import { FooterComponent } from './app/components/footer/footer.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationComponent, FooterComponent],
  templateUrl: './app/app.component.html',
  styleUrl: './app/app.component.css'
})
export class AppComponent {
  title = 'cours-angular';
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
