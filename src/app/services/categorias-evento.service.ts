import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoriaEvento } from '../models/categoriaEvento';

@Injectable({
  providedIn: 'root'
})
export class CategoriasEventoService {
  apiURL='https://localhost:44302/api/CategoriaEvento';

  constructor(private http: HttpClient) { }

  obtenerCategoriasEvento()
  {
    return this.http.get<CategoriaEvento[]>(this.apiURL);
  }
  
}
