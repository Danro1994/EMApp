import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ComprasService } from 'src/app/services/compras.service';
import { Compra } from 'src/app/models/compra';
import { Usuario } from 'src/app/models/usuario';
import { Usuarios2Service } from 'src/app/services/usuarios2.service';

@Component({
  selector: 'app-editar-usuario2',
  templateUrl: './editar-usuario2.component.html',
  styleUrls: ['./editar-usuario2.component.css']
})
export class EditarUsuario2Component implements OnInit {
  //compras: Compra[];
  usuario: Usuario;

  constructor(
    //private _comprasService: ComprasService,
    private _usuarios2Service: Usuarios2Service,
    private router: Router,
    private route: ActivatedRoute) {
      this.usuario = new Usuario();
     }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    /*this._comprasService.obtenerCompras().subscribe(res =>{
      this.compras = res;
    })*/

    this._usuarios2Service.obtenerUsuario2(id).subscribe(res =>{
      this.usuario = res;
    });
  }
  editarUsuario2()
  {
    this._usuarios2Service.editarUsuario2(this.usuario)
    .subscribe(() => {
      this.router.navigate(['/usuarios2']);
    })
  }
  cancelar()
  {
    this.router.navigate(['/usuarios2'])
  }

}
