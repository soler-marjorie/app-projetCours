import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { TP1Component } from './pages/TP/tp1/tp1.component';



export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'tp1', component: TP1Component }, 
];
