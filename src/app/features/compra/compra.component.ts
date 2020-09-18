import { Component, OnInit } from '@angular/core';
import { ComprasService } from 'src/app/services/compras.service';
import { Compra } from 'src/app/models/compra';
import {Router} from '@angular/router';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
compras : Compra[];

  constructor(private  _comprasService: ComprasService, private router: Router) { }

  ngOnInit() {
    this.obtenerCompras();
  }
  obtenerCompras(){
    this._comprasService.obtenerCompras().subscribe(data => 
      {this.compras=data;
    });
  }
  crearCompra()
  {
    this.router.navigate(['/compras/crear'])
  }
  editarCompra(id:Number)
  {
    this.router.navigate(['/compras/editar', id])
  }
  eliminarCompra(id: Number)
  {
    const res = confirm("Desea eliminar la compra?");
    if(res){
      this._comprasService.eliminarCompra(id).subscribe(() => {
        this.obtenerCompras();
      })
    }
  }

}
