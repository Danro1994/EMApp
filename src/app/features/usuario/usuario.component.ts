import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
usuarios:Usuario[];

  constructor(private  _comprasService: UsuariosService) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }
  obtenerUsuarios(){
    this._comprasService.obtenerUsuarios().subscribe(data => 
      {this.usuarios=data;
    });
  }

}
