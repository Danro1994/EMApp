import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Compra} from '../models/compra';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {
  apiURL='https://localhost:44302/api/Compra';

  constructor(private http: HttpClient) { }
  obtenerCompras()
  {
    return this.http.get<Compra[]>(this.apiURL);
  }
  obtenerCompra(id:Number)
  {
    return this.http.get<Compra>(this.apiURL + '/' +id);
  }
  crearCompra(compra: Compra)
    {
      return this.http.post<Compra>(this.apiURL, compra);
    }
    editarCompra(compra: Compra)
    {
      return this.http.put<Compra>(this.apiURL + '/' + compra.id, compra);
    }
  eliminarCompra(id: Number)
  {
    return this.http.delete(this.apiURL + "/" + id);
  }
}
