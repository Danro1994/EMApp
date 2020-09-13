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
}
