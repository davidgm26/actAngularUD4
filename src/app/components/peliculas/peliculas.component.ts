import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Pelicula } from 'src/app/interfaces/pelicula';
import { Genero } from 'src/app/interfaces/genero';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [CommonModule,NgFor,FormsModule,NgIf],
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit{

  generos: Genero[] = [
    { id: 1, nombre: "Terror" },
    { id: 2, nombre: "Crimen" },
    { id: 3, nombre: "Fantasía" },
    { id: 4, nombre: "Ciencia Ficción" },
    { id: 5, nombre: "Drama" },
    { id: 6, nombre: "Musical" },
    { id: 7, nombre: "Acción" },
    { id: 8, nombre: "Romance" },
    { id: 9, nombre: "Thriller" }
];

  listaPeliculas: Pelicula[] = [
    {
      id: 1,
      titulo: "El Resplandor",
      director: "Stanley Kubrick",
      genero: this.generos[0],
      anio: 1980,
      calificacion: 8.4
  },
  {
      id: 2,
      titulo: "Pulp Fiction",
      director: "Quentin Tarantino",
      genero: this.generos[1],
      anio: 1994,
      calificacion: 8.9
  },
  {
      id: 3,
      titulo: "El Señor de los Anillos: La Comunidad del Anillo",
      director: "Peter Jackson",
      genero: this.generos[2],
      anio: 2001,
      calificacion: 8.8
  },
  {
      id: 4,
      titulo: "Matrix",
      director: "Lana Wachowski, Lilly Wachowski",
      genero: this.generos[3],
      anio: 1999,
      calificacion: 8.7
  },
  {
      id: 5,
      titulo: "Forrest Gump",
      director: "Robert Zemeckis",
      genero: this.generos[4],
      anio: 1994,
      calificacion: 8.8
  },
  {
      id: 6,
      titulo: "La La Land",
      director: "Damien Chazelle",
      genero: this.generos[5],
      anio: 2016,
      calificacion: 8.0
  },
  {
      id: 7,
      titulo: "El Caballero de la Noche",
      director: "Christopher Nolan",
      genero: this.generos[6],
      anio: 2008,
      calificacion: 9.0
  },
  {
      id: 8,
      titulo: "Amélie",
      director: "Jean-Pierre Jeunet",
      genero: this.generos[7],
      anio: 2001,
      calificacion: 8.3
  },
  {
      id: 9,
      titulo: "Interstellar",
      director: "Christopher Nolan",
      genero: this.generos[3],
      anio: 2014,
      calificacion: 8.6
  },
  {
      id: 10,
      titulo: "Parásitos",
      director: "Bong Joon-ho",
      genero: this.generos[8],
      anio: 2019,
      calificacion: 8.6
  },
  {
      id: 11,
      titulo: "Psicosis",
      director: "Alfred Hitchcock",
      genero: this.generos[0],
      anio: 1960,
      calificacion: 8.5
  },
  {
      id: 12,
      titulo: "Los Infiltrados",
      director: "Martin Scorsese",
      genero: this.generos[1],
      anio: 2006,
      calificacion: 8.5
  },
  {
      id: 13,
      titulo: "Harry Potter y la Piedra Filosofal",
      director: "Chris Columbus",
      genero: this.generos[2],
      anio: 2001,
      calificacion: 7.6
  },
  {
      id: 14,
      titulo: "Blade Runner",
      director: "Ridley Scott",
      genero: this.generos[3],
      anio: 1982,
      calificacion: 8.1
  },
  {
      id: 15,
      titulo: "Cadena Perpetua",
      director: "Frank Darabont",
      genero: this.generos[4],
      anio: 1994,
      calificacion: 9.3
  },
  {
      id: 16,
      titulo: "El Gran Showman",
      director: "Michael Gracey",
      genero: this.generos[5],
      anio: 2017,
      calificacion: 7.6
  },
  {
      id: 17,
      titulo: "Gladiador",
      director: "Ridley Scott",
      genero: this.generos[6],
      anio: 2000,
      calificacion: 8.5
  },
  {
      id: 18,
      titulo: "Titanic",
      director: "James Cameron",
      genero: this.generos[7],
      anio: 1997,
      calificacion: 7.9
  },
  {
      id: 19,
      titulo: "Gravity",
      director: "Alfonso Cuarón",
      genero: this.generos[3],
      anio: 2013,
      calificacion: 7.7
  },
  {
      id: 20,
      titulo: "El Juego del Calamar",
      director: "Hwang Dong-hyuk",
      genero: this.generos[8],
      anio: 2021,
      calificacion: 8.0
  }
  ];

  listaPeliculasMostradas: Pelicula[] = this.listaPeliculas;
  idGeneroSeleccionado!: number;
  media!: number;   
  mostrar: boolean = false;
  nuevaCalificacion!: number;

  ngOnInit(): void {
    
  }

  buscar(){
    console.log(this.idGeneroSeleccionado);
    debugger;
    this.listaPeliculasMostradas = this.listaPeliculas.filter(p => p.genero.id == this.idGeneroSeleccionado);
    console.log(this.listaPeliculasMostradas);
    
  }

  limpiar(){
    this.listaPeliculasMostradas = this.listaPeliculas;
    this.idGeneroSeleccionado = 0;
    this.mostrar = false;
  }

  topTresValoraciones(){
    this.listaPeliculasMostradas = this.listaPeliculas.sort((a,b) => b.calificacion - a.calificacion).slice(0,3);
  }

  calcularMedia(){
    this.mostrar = true;
    this.media  = Math.round(this.listaPeliculas.reduce((a,b) => a + b.calificacion, 0) / this.listaPeliculas.length * 10) / 10;
  }


}
