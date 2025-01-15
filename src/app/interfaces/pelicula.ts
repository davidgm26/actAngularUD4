import { Genero } from "./genero";

export interface Pelicula {
    id:number; 
    titulo:string;
    director:string;
    genero:Genero;
    anio:number;
    calificacion: number;
}
