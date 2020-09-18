import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { CategoriasEventoService } from 'src/app/services/categorias-evento.service';
import { CategoriaEvento } from 'src/app/models/categoriaEvento';
import { InvitadosService } from 'src/app/services/invitados.service';
import { Invitado } from 'src/app/models/invitado';
import { Evento } from 'src/app/models/evento';
import { Eventos2Service } from 'src/app/services/eventos2.service';

@Component({
  selector: 'app-editar-evento2',
  templateUrl: './editar-evento2.component.html',
  styleUrls: ['./editar-evento2.component.css']
})
export class EditarEvento2Component implements OnInit {
  categoriasEvento: CategoriaEvento[];
  invitados: Invitado[];
  evento: Evento;

  constructor(private _categoriasEventoService: CategoriasEventoService,
    private _invitadosService: InvitadosService,
    private _eventos2Service: Eventos2Service,
    private router: Router,
    private route: ActivatedRoute) { 
      this.evento = new Evento();
    }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get("id");

    this._categoriasEventoService.obtenerCategoriasEvento().subscribe(res =>{
      this.categoriasEvento = res;
    });
    this._invitadosService.obtenerInvitados().subscribe(res =>{
      this.invitados = res;
    });
    /*this._eventos2Service.obtenerEvento2(id).subscribe(res =>{
      this.evento = res;
    });*/
  }
  editarEvento2()
  {
    this._eventos2Service.editarEvento2(this.evento)
    .subscribe(() => {
      this.router.navigate(['/eventos2']);
    })
  }
  cancelar()
  {
    this.router.navigate(['/eventos2'])
  }
}
