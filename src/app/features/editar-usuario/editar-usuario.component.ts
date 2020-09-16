import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ComprasService } from 'src/app/services/compras.service';
import { Compra } from 'src/app/models/compra';
import { Usuario } from 'src/app/models/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  compras: Compra[];
  usuario: Usuario;
  
  constructor(
    private _comprasService: ComprasService,
    private _usuariosService: UsuariosService,
    private router: Router,
    private route: ActivatedRoute) {
      this.usuario = new Usuario();
     }

  ngOnInit() {

    const id = +this.route.snapshot.paramMap.get("id");

    this._comprasService.obtenerCompras().subscribe(res =>{
      this.compras = res;
    });
   
   this._usuariosService.obtenerUsuario(id).subscribe(res =>{
      this.usuario = res;
    });
  }
  editarUsuario()
  {
    this._usuariosService.editarUsuario(this.usuario)
    .subscribe(() => {
      this.router.navigate(['/usuarios']);
    })
  }
  cancelar()
  {
    this.router.navigate(['/usuarios'])
  }
}
