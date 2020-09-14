import { from } from 'rxjs';
import { CategoriaEvento } from './categoriaEvento'
import { Invitado } from './invitado'

export class Evento {
    id:Number;
    nombre_evento:String;
    lugar:String;
    precio:String;
    fecha:Date;
    clave:String;
    categoriaEventoid:Number;
    categoriaEvento:CategoriaEvento;
    invitadoid:Number;
    invitado:Invitado;

}