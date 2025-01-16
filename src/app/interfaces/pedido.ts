import { Plato } from "./plato";

export interface Pedido {
    id:number;
    cliente:string;
    platos: Plato[];
}
