import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComprasService } from 'src/app/services/compras.service';
import { Compra } from 'src/app/models/compra';
import { Usuario } from 'src/app/models/usuario';
import { Usuarios2Service } from 'src/app/services/usuarios2.service';

@Component({
  selector: 'app-crear-usuario2',
  templateUrl: './crear-usuario2.component.html',
  styleUrls: ['./crear-usuario2.component.css']
})
export class CrearUsuario2Component implements OnInit {
  compras: Compra[];
  usuario: Usuario;

  constructor(private _comprasService: ComprasService, 
    private _usuariosService:Usuarios2Service,
    private router: Router) {
      this.usuario = new Usuario();
     }

  ngOnInit(): void {
    this._comprasService.obtenerCompras().subscribe(res =>{
      this.compras = res;
  })
}
  CrearUsuario2()
  {
    if(this.usuario)
    {
      this._usuariosService.crearUsuario2(this.usuario).subscribe(() =>{
        this.router.navigate(['/usuarios2'])
      })
    }
  }
  cancelar()
  {
    this.router.navigate(['/usuarios2'])
  }

}
