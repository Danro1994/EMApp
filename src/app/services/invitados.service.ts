import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Invitado } from '../models/invitado';

@Injectable({
  providedIn: 'root'
})
export class InvitadosService {
  apiURL='https://localhost:44302/api/Invitado';

  constructor(private http: HttpClient) { }
  obtenerInvitados()
{
  return this.http.get<Invitado[]>(this.apiURL);
}
obtenerInvitado(id:Number)
{
  return this.http.get<Invitado>(this.apiURL + '/' +id);
}
  crearInvitado(invitado: Invitado)
{
  return this.http.post<Invitado>(this.apiURL, invitado);
}
  editarInvitado(invitado: Invitado)
{
  return this.http.put<Invitado>(this.apiURL + '/' + invitado.id, invitado);
}
eliminarInvitado(id: Number)
{
  return this.http.delete(this.apiURL + "/" + id);
}
}
