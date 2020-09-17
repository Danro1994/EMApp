import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Eventos2Service } from 'src/app/services/eventos2.service';
import { Evento } from 'src/app/models/evento';
import { CategoriaEvento } from 'src/app/models/categoriaEvento';
import { CategoriasEventoService } from 'src/app/services/categorias-evento.service';

@Component({
  selector: 'app-editar-categoria-evento',
  templateUrl: './editar-categoria-evento.component.html',
  styleUrls: ['./editar-categoria-evento.component.css']
})
export class EditarCategoriaEventoComponent implements OnInit {
  eventos: Evento[];
  categoriaEvento: CategoriaEvento;
  ;
  constructor(
    private _eventosService: Eventos2Service,
    private _categoriaEventoService: CategoriasEventoService,
    private router: Router,
    private route: ActivatedRoute) {
      this.categoriaEvento = new CategoriaEvento();
     }

  ngOnInit() {

    const id = +this.route.snapshot.paramMap.get("id");

    this._eventosService.obtenerEventos().subscribe(res =>{
      this.eventos = res;
    });

   this._categoriaEventoService.obtenerCategoriaEvento(id).subscribe(res =>{
      this.categoriaEvento = res;
    });
  }
  editarCategoriaEvento()
  {
    this._categoriaEventoService.editarCategoriaEvento(this.categoriaEvento)
    .subscribe(() => {
      this.router.navigate(['/categoriasEvento']);
    })
  }
  cancelar()
  {
    this.router.navigate(['/categoriasEvento'])
  }
}
