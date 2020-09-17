import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios2Service } from 'src/app/services/usuarios2.service';
import { Usuario } from 'src/app/models/usuario';
import { Eventos2Service } from 'src/app/services/eventos2.service';
import { Evento } from 'src/app/models/evento';
import { Compra } from 'src/app/models/compra';
import { ComprasService } from 'src/app/services/compras.service';

@Component({
  selector: 'app-crear-compra',
  templateUrl: './crear-compra.component.html',
  styleUrls: ['./crear-compra.component.css']
})
export class CrearCompraComponent implements OnInit {
  usuarios: Usuario[];
  eventos: Evento[];
  compra: Compra;

  constructor(private _usuarios2Service: Usuarios2Service, 
    private _eventos2Service: Eventos2Service, 
    private _comprasService: ComprasService,
    private router: Router) { 
      this.compra = new Compra();

    }

  ngOnInit(): void {
    this._usuarios2Service.obtenerUsuarios2().subscribe(res =>{
      this.usuarios = res;
    });
    this._eventos2Service.obtenerEventos2().subscribe(res =>{
      this.eventos = res;
    });
  }
  crearCompra()
  {
    if(this.compra)
    {
      this._comprasService.crearCompra(this.compra).subscribe(() =>{
        this.router.navigate(['/compras'])
      })
    }
  }
  cancelar()
  {
    this.router.navigate(['/compras'])
  }
}
