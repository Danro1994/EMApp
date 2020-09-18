import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { InvitadosService } from 'src/app/services/invitados.service';
import { Invitado } from 'src/app/models/invitado';

@Component({
  selector: 'app-invitados',
  templateUrl: './invitados.component.html',
  styleUrls: ['./invitados.component.css']
})
export class InvitadosComponent implements OnInit {
  invitados: Invitado[];

  constructor(private _invitadosService: InvitadosService, private router: Router) { }

  ngOnInit() 
  {
    this.obtenerInvitados();

  }
  obtenerInvitados()
  {
    this._invitadosService.obtenerInvitados().subscribe(data => 
      {this.invitados=data;
    });
  }
  crearInvitado()
  {
    this.router.navigate(['/invitados/crear'])
  }
  editarInvitado(id:Number)
  {
    this.router.navigate(['/invitados/editar', id])
  }
  eliminarInvitado(id: Number)
  {
    const res = confirm("Desea eliminar el invitado?");
    if(res){
      this._invitadosService.eliminarInvitado(id).subscribe(() => {
        this.obtenerInvitados();
      })
    }
  }
}
