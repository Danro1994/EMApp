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

  constructor(private _eventosService: EventosService) { }

  ngOnInit() 
  {
    this.obtenerEventos();
  }
 
  obtenerEventos(){
    this._eventosService.obtenerEventos().subscribe(data => 
      {this.eventos=data;
    });
  }

}