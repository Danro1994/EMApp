import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Eventos2Service } from 'src/app/services/eventos2.service';
import { Evento } from 'src/app/models/evento';
import { Invitado } from 'src/app/models/invitado';
import { InvitadosService } from 'src/app/services/invitados.service';

@Component({
  selector: 'app-crear-invitado',
  templateUrl: './crear-invitado.component.html',
  styleUrls: ['./crear-invitado.component.css']
})
export class CrearInvitadoComponent implements OnInit {
  eventos: Evento[];
  invitado: Invitado;
  
  constructor(private _eventos2Service: Eventos2Service, 
    private _invitadosService:InvitadosService,
    private router: Router) { 
      this.invitado = new Invitado();
    }

  ngOnInit(){
    this._eventos2Service.obtenerEventos2().subscribe(res =>{
      this.eventos = res;
    })
  }
  crearInvitado()
  {
    if(this.invitado)
    {
      this._invitadosService.crearInvitado(this.invitado).subscribe(() =>{
        this.router.navigate(['/invitados'])
      })
    }
  }
  cancelar()
  {
    this.router.navigate(['/invitados'])
  }
}
