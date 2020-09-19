import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evento } from '../models/evento';

@Injectable({
  providedIn: 'root'
})
export class Eventos2Service {
  apiURL='https://localhost:44302/api/evento';

  constructor(private http: HttpClient) { }
  obtenerEvento2(id:Number)
  {
    return this.http.get<Evento>(this.apiURL + '/' +id);
  }
  obtenerEventos2()
    {
      return this.http.get<Evento[]>(this.apiURL);
    }
    crearEvento2(evento: Evento)
    {
      return this.http.post<Evento>(this.apiURL, evento);
    }
    editarEvento2(evento: Evento)
    {
      return this.http.put<Evento>(this.apiURL + '/' + evento.id, evento);
    }
    eliminarEvento2(id: Number)
    {
      return this.http.delete(this.apiURL + "/" + id);
    }
  }
