import { Component, OnInit } from '@angular/core';
import { CategoriaEvento }  from 'src/app/models/categoriaEvento';
import {Router} from '@angular/router';
import { CategoriasEventoService } from 'src/app/services/categorias-evento.service';

@Component({
  selector: 'app-categorias-evento',
  templateUrl: './categorias-evento.component.html',
  styleUrls: ['./categorias-evento.component.css']
})
export class CategoriasEventoComponent implements OnInit {
  categoriasEvento: CategoriaEvento[];
    
      constructor(private _categoriasEventoService: CategoriasEventoService) { }
    
      ngOnInit() 
      {
        this.obtenerCategoriasEvento();
      }
     
      obtenerCategoriasEvento(){
        this._categoriasEventoService.obtenerCategoriasEvento().subscribe(data => 
          {this.categoriasEvento=data;
        });
      }
    
    }