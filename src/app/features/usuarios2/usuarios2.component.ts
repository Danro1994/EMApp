import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios2Service } from 'src/app/services/usuarios2.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-usuarios2',
  templateUrl: './usuarios2.component.html',
  styleUrls: ['./usuarios2.component.css']
})
export class Usuarios2Component implements OnInit {
  usuarios: Usuario[];

  constructor(private _usuarios2Service: Usuarios2Service, private router: Router) { }

  ngOnInit(): void {
    this.obtenerUsuarios2();

  }

  obtenerUsuarios2()
  {
    this._usuarios2Service.obtenerUsuarios2().subscribe(data => 
      {this.usuarios=data;
    });
  }
  crearUsuario2()
  {
    this.router.navigate(['/usuarios2/crear'])
  }
  editarUsuario2(id:Number)
  {
    this.router.navigate(['/usuarios2/editar', id]);
  }
  eliminarUsuario2(id: Number)
  {
    const res = confirm("Desea eliminar el usuario?");
    if(res){
      this._usuarios2Service.eliminarUsuario2(id).subscribe(() => {
        this.obtenerUsuarios2();
      })
    }
  }
}
