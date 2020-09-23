import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Usuarios2Service } from 'src/app/services/usuarios2.service';
import { Usuario } from 'src/app/models/usuario';
import { Eventos2Service } from 'src/app/services/eventos2.service';
import { Evento } from 'src/app/models/evento';
import { Compra } from 'src/app/models/compra';
import { ComprasService } from 'src/app/services/compras.service';

@Component({
  selector: 'app-editar-compra',
  templateUrl: './editar-compra.component.html',
  styleUrls: ['./editar-compra.component.css']
})
export class EditarCompraComponent implements OnInit {
  usuarios: Usuario[];
  eventos: Evento[];
  compra: Compra;

  constructor( private _usuarios2Service: Usuarios2Service,
    private _eventos2Service: Eventos2Service,
    private _comprasService: ComprasService,
    private router: Router,
    private route: ActivatedRoute) {
      this.compra = new Compra();
     }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get("id");

    this._usuarios2Service.obtenerUsuarios2().subscribe(res =>{
      this.usuarios = res;
    });
    this._eventos2Service.obtenerEventos2().subscribe(res =>{
      this.eventos = res;
    });
    this._comprasService.obtenerCompra(id).subscribe(res =>{
      this.compra = res;
    })
  }
  editarCompra()
  {
    this._comprasService.editarCompra(this.compra)
    .subscribe(() => {
      this.router.navigate(['/compras']);
    })
  }
  cancelar()
  {
    this.router.navigate(['/compras'])
  }
}
