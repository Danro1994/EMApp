import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from 'src/app/models/usuario';
import {Router} from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios:Usuario[];

  constructor(private  _usuariosService: UsuariosService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }
  obtenerUsuarios(){
    this._usuariosService.obtenerUsuarios().subscribe(data => 
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
     this._usuariosService.eliminarUsuario(id).subscribe(() => {
     this.obtenerUsuarios();
    });
  }
}
}
