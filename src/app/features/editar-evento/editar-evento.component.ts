import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { EventosService } from 'src/app/services/eventos.service';
import { Evento } from 'src/app/models/evento';
import { CategoriaEvento } from 'src/app/models/categoriaEvento';
import { CategoriasEventoService } from 'src/app/services/categorias-evento.service';
import { Invitado } from 'src/app/models/invitado';
import { InvitadosService } from 'src/app/services/invitados.service';

@Component({
  selector: 'app-editar-evento',
  templateUrl: './editar-evento.component.html',
  styleUrls: ['./editar-evento.component.css']
})
export class EditarEventoComponent implements OnInit {
  categoriasEvento: CategoriaEvento[];
  invitados:Invitado[];
  evento: Evento;
  
  constructor(
    private _categoriaEventoService: CategoriasEventoService,
    private _invitadosEventoService: InvitadosService,
    private _eventosService: EventosService,
    private router: Router,
    private route: ActivatedRoute) {
      this.evento = new Evento();
     }

  ngOnInit() {

    const id = +this.route.snapshot.paramMap.get("id");

    this._categoriaEventoService.obtenerCategoriasEvento().subscribe(res =>{
      this.categoriasEvento = res;
    });
    this._invitadosEventoService.obtenerInvitados().subscribe(res =>{
      this.invitados = res;
    });
   this._eventosService.obtenerEvento(id).subscribe(res =>{
      this.evento = res;
    });
  }
  editarEvento()
  {
    this._eventosService.editarEvento(this.evento)
    .subscribe(() => {
      this.router.navigate(['/eventos']);
    })
  }
  cancelar()
  {
    this.router.navigate(['/eventos'])
  }
}
