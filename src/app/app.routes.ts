import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

import { TP1Component } from './pages/TP/tp1/tp1.component';

import { ListFriendsComponent } from './pages/EXOS/Exercice1/list-friends/list-friends.component';


import { Cour1Component } from './pages/Cours/cour1/cour1.component'


export const routes: Routes = [
    { path: '', component: HomeComponent },


    { path: 'tp1', component: TP1Component }, 

    { path: 'exercice1', component: ListFriendsComponent }, 

    { path: 'lecon1', component: Cour1Component }, 
];
