import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Eventos2Service} from 'src/app/services/eventos2.service';
import {Evento} from 'src/app/models/evento';

@Component({
  selector: 'app-eventos2',
  templateUrl: './eventos2.component.html',
  styleUrls: ['./eventos2.component.css']
})
export class Eventos2Component implements OnInit {
  eventos: Evento[];

  constructor(private _eventos2Service: Eventos2Service, private router: Router) { }

  ngOnInit(): void {
    this.obtenerEventos2();

  }
  obtenerEventos2()
  {
    this._eventos2Service.obtenerEventos2().subscribe(data => 
      {this.eventos=data;
    });
  }
  crearEvento2()
  {
    this.router.navigate(['/eventos2/crear'])
  }
  editarEvento2(id:Number)
  {
    this.router.navigate(['/eventos2/editar', id])
  }
  eliminarEvento2(id: Number)
  {
    const res = confirm("Desea eliminar el evento?");
    if(res){
      this._eventos2Service.eliminarEvento2(id).subscribe(() => {
        this.obtenerEventos2();
      })
    }
  }
}
