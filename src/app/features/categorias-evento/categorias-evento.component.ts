import { Component, OnInit } from '@angular/core';
import { CategoriaEvento }  from 'src/app/models/categoriaEvento';
import { CategoriasEventoService } from 'src/app/services/categorias-evento.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-categorias-evento',
  templateUrl: './categorias-evento.component.html',
  styleUrls: ['./categorias-evento.component.css']
})
export class CategoriasEventoComponent implements OnInit {
  categoriasEvento: CategoriaEvento[];
    
      constructor(private _categoriasEventoService: CategoriasEventoService, private router: Router) { }
    
      ngOnInit() 
      {
        this.obtenerCategoriasEvento();
      }
     
      obtenerCategoriasEvento(){
        this._categoriasEventoService.obtenerCategoriasEvento().subscribe(data => 
          {this.categoriasEvento=data;
        });
      }
      crearCategoriaEvento()
      {
        this.router.navigate(['categoriasEvento/crear'])
      }
      editarCategoriaEvento(id:Number)
      {
       this.router.navigate(['categoriasEvento/editar', id])
       }
       eliminarCategoriaEvento(id: Number)
      {
         const res = confirm("Desea eliminar la Categoria del Evento?");
         if(res){
         this._categoriasEventoService.eliminarCategoriaEvento(id).subscribe(() => {
         this.obtenerCategoriasEvento();
        });
      }
    }
  }