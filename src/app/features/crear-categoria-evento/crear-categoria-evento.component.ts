import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evento } from 'src/app/models/evento';
import { EventosService } from 'src/app/services/eventos.service';
import { CategoriaEvento } from 'src/app/models/categoriaEvento';
import { CategoriasEventoService } from 'src/app/services/categorias-evento.service';

@Component({
  selector: 'app-crear-categoria-evento',
  templateUrl: './crear-categoria-evento.component.html',
  styleUrls: ['./crear-categoria-evento.component.css']
})
export class CrearCategoriaEventoComponent implements OnInit {
  eventos: Evento[];
  categoriaEvento: CategoriaEvento;

  constructor(private _eventosService: EventosService,
    private _categoriaEventoService:CategoriasEventoService,
    private router: Router) { 
      this.categoriaEvento = new CategoriaEvento();
    }

  ngOnInit(): void {
    this._eventosService.obtenerEventos().subscribe(res =>{
      this.eventos = res;
    })
  }

  crearCategoriaEvento()
  {
    if(this.categoriaEvento)
    {
      this._categoriaEventoService.crearCategoriaEvento(this.categoriaEvento).subscribe(() =>{
        this.router.navigate(['/categoriasEvento'])
      })
    }
  }
  cancelar()
  {
    this.router.navigate(['/categoriasEvento'])  
  }
}
