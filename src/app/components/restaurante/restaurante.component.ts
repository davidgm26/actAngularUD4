import { Component, NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Plato } from 'src/app/interfaces/plato';
import { Pedido } from 'src/app/interfaces/pedido';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurante',
  standalone: true,
  imports: [CommonModule,NgFor,FormsModule],
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css']
})
export class RestauranteComponent {

  platos: Plato[] = [];
  pedidos: Pedido[] = [];
  cliente!: string;
  precio!: number;
  totalVentas: number = 0;

  ngOnInit(): void {
      this.platos = [
      { id: 1, nombre: "Ensalada César", precio: 8.5 },
      { id: 2, nombre: "Sopa de Tomate", precio: 5.0 },
      { id: 3, nombre: "Pizza Margarita", precio: 12.0 },
      { id: 4, nombre: "Lasaña", precio: 14.5 },
      { id: 5, nombre: "Hamburguesa", precio: 10.0 },
      { id: 6, nombre: "Sushi Roll", precio: 15.0 },
      { id: 7, nombre: "Tacos", precio: 8.0 },
      { id: 8, nombre: "Paella", precio: 18.0 },
      { id: 9, nombre: "Ceviche", precio: 11.5 },
      { id: 10, nombre: "Brownie", precio: 6.0 }
    ];
    
     this.pedidos= [
      {
        id: 1,
        cliente: "Carlos Pérez",
        platos: [this.platos[0], this.platos[2], this.platos[6]]
      },
      {
        id: 2,
        cliente: "Ana Gómez",
        platos: [this.platos[3], this.platos[5], this.platos[9]]
      },
      {
        id: 3,
        cliente: "Luis Fernández",
        platos: [this.platos[1], this.platos[4], this.platos[8]]
      },
      {
        id: 4,
        cliente: "María López",
        platos: [this.platos[7], this.platos[2], this.platos[9]]
      },
      {
        id: 5,
        cliente: "Juan Martínez",
        platos: [this.platos[0], this.platos[1], this.platos[5]]
      }
    ];
  }

  constructor(
    private router: Router,
  ){

  }

  calcularTotalPedido(pedido:Pedido):number{
    let total = 0;
    for (let plato of pedido.platos){
      total += plato.precio;
    }
    return total;
  }

  calcularTotalGanancias():number{
    this.totalVentas = 0;
    for (let pedido of this.pedidos){
      this.totalVentas += this.calcularTotalPedido(pedido);
    }
    return this.totalVentas;
  }

  buscarPorCliente(cliente: string){
    let pedidosCliente = this.pedidos.filter(pedido => pedido.cliente === cliente);
    this.pedidos = pedidosCliente;
  }

  buscarPorPrecio(precio: number){

  }

  irAPeliculas(){
    this.router.navigate(['/peliculas']);
  }

  irARestaurante(){
    this.router.navigate(['/restaurante']);
  }



}
