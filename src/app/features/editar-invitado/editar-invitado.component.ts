import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Eventos2Service } from 'src/app/services/eventos2.service';
import { Evento } from 'src/app/models/evento';
import { Invitado } from 'src/app/models/invitado';
import { InvitadosService } from 'src/app/services/invitados.service';

@Component({
  selector: 'app-editar-invitado',
  templateUrl: './editar-invitado.component.html',
  styleUrls: ['./editar-invitado.component.css']
})
export class EditarInvitadoComponent implements OnInit {
  eventos: Evento[];
  invitado: Invitado;

  constructor( private _eventos2Service: Eventos2Service,
    private _invitadosService: InvitadosService,
    private router: Router,
    private route: ActivatedRoute) { 
      this.invitado = new Invitado();
    }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");

    this._eventos2Service.obtenerEventos2().subscribe(res =>{
      this.eventos = res;
    })

    this._invitadosService.obtenerInvitado(id).subscribe(res =>{
      this.invitado = res;
    })
  }
  editarInvitado()
  {
    this._invitadosService.editarInvitado(this.invitado)
    .subscribe(() => {
      this.router.navigate(['/invitados']);
    })
  }
  cancelar()
  {
    this.router.navigate(['/invitados'])
  }
}
