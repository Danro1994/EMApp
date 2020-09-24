import { Evento } from './evento';
import { Usuario } from './usuario';

export class Compra{
id:Number;
cantidadBoletos:String;
numeroTarjeta:String;
usuarioid:Number;
usuario:Usuario;
eventoid:Number;
evento:Evento;
}
