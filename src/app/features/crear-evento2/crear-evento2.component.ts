import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriasEventoService } from 'src/app/services/categorias-evento.service';
import { CategoriaEvento } from 'src/app/models/categoriaEvento';
import { InvitadosService } from 'src/app/services/invitados.service';
import { Invitado } from 'src/app/models/invitado';
import { Evento } from 'src/app/models/evento';
import { Eventos2Service } from 'src/app/services/eventos2.service';

@Component({
  selector: 'app-crear-evento2',
  templateUrl: './crear-evento2.component.html',
  styleUrls: ['./crear-evento2.component.css']
})
export class CrearEvento2Component implements OnInit {
  categoriasEvento: CategoriaEvento[];
  invitados: Invitado[];
  evento: Evento;

  constructor(private _categoriasEventoService: CategoriasEventoService, 
    private _invitadosService: InvitadosService, 
    private _eventos2Service:Eventos2Service,
    private router: Router) { 
      this.evento = new Evento();

    }

  ngOnInit(): void {
    this._categoriasEventoService.obtenerCategoriasEvento().subscribe(res =>{
      this.categoriasEvento = res;
    });
    this._invitadosService.obtenerInvitados().subscribe(res =>{
      this.invitados = res;
    });
  }
  crearEvento2()
  {
    if(this.evento)
    {
      this._eventos2Service.crearEvento2(this.evento).subscribe(() =>{
        this.router.navigate(['/eventos2'])
      })
    }
  }
  cancelar()
  {
    this.router.navigate(['/eventos2'])
  }
}
