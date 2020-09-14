import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoriaEvento } from '../models/categoriaEvento';

@Injectable({
  providedIn: 'root'
})
export class CategoriasEventoService {
  apiURL='https://localhost:44302/api/CategoriaEvento';

  constructor(private http: HttpClient) { }
  obtenerCategoriaEvento(id:Number)
  {
    return this.http.get<CategoriaEvento[]>(this.apiURL + '/' +id);
  }
  obtenerCategoriaEventos()
  {
    return this.http.get<CategoriaEvento[]>(this.apiURL);
  }
  crearCategoriaEvento(categoriaEvento: CategoriaEvento)
  {
    return this.http.post<CategoriaEvento>(this.apiURL, categoriaEvento);
  }
  editarCategoriaEvento(categoriaEvento: CategoriaEvento)
  {
    return this.http.put<CategoriaEvento>(this.apiURL + '/' + categoriaEvento.id, categoriaEvento);
  }
  eliminarCategoriaEvento(id: Number)
  {
    return this.http.delete(this.apiURL + "/" + id);
  }
}
