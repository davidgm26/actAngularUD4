import { Routes } from '@angular/router';
import { PeliculasComponent } from './components/peliculas/peliculas.component';

export const routes: Routes = [
    {component: PeliculasComponent, path: 'peliculas'},
    {path: '', redirectTo: 'peliculas', pathMatch: 'full'}
];
