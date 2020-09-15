import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evento } from 'src/app/models/evento';
import { EventosService } from 'src/app/services/eventos.service';
import { Invitado } from 'src/app/models/invitado';
import { InvitadosService } from 'src/app/services/invitados.service';
import { CategoriaEvento } from 'src/app/models/categoriaEvento';
import { CategoriasEventoService } from 'src/app/services/categorias-evento.service';

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.css']
})
export class CrearEventoComponent implements OnInit {
  invitados: Invitado[];
  categoriasEvento: CategoriaEvento[];
  evento: Evento;

  constructor(
    private _invitadosService: InvitadosService,
    private _categoriasEventoService: CategoriasEventoService,
    private _eventosService:EventosService,
    private router: Router) { 
      this.evento = new Evento();
    }

  ngOnInit(): void {
    this._invitadosService.obtenerInvitados().subscribe(res =>{
      this.invitados = res;
    })
    this._categoriasEventoService.obtenerCategoriasEvento().subscribe(res =>{
      this.categoriasEvento = res;
    })
  }

  crearEvento()
  {
    if(this.evento)
    {
      this._eventosService.crearEvento(this.evento).subscribe(() =>{
        this.router.navigate(['/eventos'])
      })
    }
  }
  cancelar()
  {
    this.router.navigate(['/eventos'])  
  }
}
