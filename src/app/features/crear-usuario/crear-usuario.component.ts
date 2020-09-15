import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evento } from 'src/app/models/evento';
import { EventosService } from 'src/app/services/eventos.service';
import { Usuario } from 'src/app/models/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})

export class CrearUsuarioComponent implements OnInit {
  eventos: Evento[];
  usuario: Usuario;

  constructor(private _eventosService: EventosService,
    private _usuariosService:UsuariosService,
    private router: Router) { 
      this.usuario = new Usuario();
    }

  ngOnInit(): void {
    this._eventosService.obtenerEventos().subscribe(res =>{
      this.eventos = res;
    })
  }

  crearUsuario()
  {
    if(this.usuario)
    {
      this._usuariosService.crearUsuario(this.usuario).subscribe(() =>{
        this.router.navigate(['/usuarios'])
      })
    }
  }
  cancelar()
  {
    this.router.navigate(['/usuarios'])  
  }
}
