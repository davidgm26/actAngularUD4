import { Routes } from '@angular/router';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { RestauranteComponent } from './components/restaurante/restaurante.component';

export const routes: Routes = [
    {component: PeliculasComponent, path: 'peliculas'},
    {component: RestauranteComponent, path: 'restaurante'},
    {path: '', redirectTo: 'peliculas', pathMatch: 'full'}
];
