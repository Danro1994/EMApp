import { Component, OnInit } from '@angular/core';
import { ComprasService } from 'src/app/services/compras.service';
import { Compra } from 'src/app/models/compra';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
compras : Compra[];

  constructor(private  _comprasService: ComprasService) { }

  ngOnInit(): void {
    this.obtenerCompras();
  }
  obtenerCompras(){
    this._comprasService.obtenerCompras().subscribe(data => 
      {this.compras=data;
    });
  }

}
