import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from 'src/app/models/usuario';
import {Router} from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
usuarios:Usuario[];

  constructor(private  _comprasService: UsuariosService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }
  obtenerUsuarios(){
    this._comprasService.obtenerUsuarios().subscribe(data => 
      {this.usuarios=data;
    });
  }
  crearUsuario()
  {
    this.router.navigate(['/usuarios/crear'])
  }
  editarUsuario(id:Number)
  {
    this.router.navigate(['/usuarios/editar', id])
  }
  eliminarUsuario(id: Number)
  {
    const res = confirm("Desea eliminar el usuario?");
    if(res){
      this._comprasService.eliminarUsuario(id).subscribe(() => {
        this.obtenerUsuarios();
      })
    }
  }

}
