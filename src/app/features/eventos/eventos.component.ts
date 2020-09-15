import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/models/evento';
import {Router} from '@angular/router';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventoComponent implements OnInit {
eventos: Evento[];

  constructor(private _eventosService: EventosService, private router: Router) { }

  ngOnInit() 
  {
    this.obtenerEventos();
  }
 
  obtenerEventos(){
    this._eventosService.obtenerEventos().subscribe(data => 
      {this.eventos=data;
    });
  }
  crearEvento()
  {
    this.router.navigate(['eventos/crear'])
  }
  editarEvento(id:Number)
  {
   this.router.navigate(['eventos/editar', id])
   }
   eliminarEvento(id: Number)
  {
     const res = confirm("Desea eliminar el usuario?");
     if(res){
     this._eventosService.eliminarEvento(id).subscribe(() => {
     this.obtenerEventos();
    });
  } 
 }
}