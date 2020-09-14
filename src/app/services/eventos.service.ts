import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evento } from '../models/evento';

@Injectable({
  providedIn: 'root'
})

export class EventosService {
  apiURL='https://localhost:44302/api/Evento';

  constructor(private http: HttpClient) { }
  obtenerEventos()
  {
    return this.http.get<Evento[]>(this.apiURL);
  }
}
