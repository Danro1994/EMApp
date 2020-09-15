import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evento } from '../models/evento';

@Injectable({
  providedIn: 'root'
})

export class EventosService {
  apiURL='https://localhost:44302/api/Evento';

  constructor(private http: HttpClient) { }
  obtenerEvento(id:Number)
  {
    return this.http.get<Evento[]>(this.apiURL + '/' +id);
  }
  obtenerEventos()
  {
    return this.http.get<Evento[]>(this.apiURL);
  }
  crearEvento(evento: Evento)
  {
    return this.http.post<Evento>(this.apiURL, evento);
  }
  editarEvento(evento: Evento)
  {
    return this.http.put<Evento>(this.apiURL + '/' + evento.id, evento);
  }
  eliminarEvento(id: Number)
  {
    return this.http.delete<Evento>(this.apiURL + "/" + id);
  }
}
