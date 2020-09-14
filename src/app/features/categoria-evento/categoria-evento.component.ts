import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CategoriasEventoService } from 'src/app/services/categorias-evento.service';
import { CategoriaEvento } from 'src/app/models/categoriaEvento';

@Component({
  selector: 'app-categoria-evento',
  templateUrl: './categoria-evento.component.html',
  styleUrls: ['./categoria-evento.component.css']
})
export class CategoriaEventoComponent implements OnInit {
  categoriasEvento: CategoriaEvento[];

  constructor(private _categoriasEventoService: CategoriasEventoService) { }

  ngOnInit() 
  {
    this.obtenerCategoriasEvento();
  }
 
  obtenerCategoriasEvento(){
    this._categoriasEventoService.obtenerCategoriaEventos().subscribe(data => 
      {this.categoriasEvento=data;
    });
  }
}
