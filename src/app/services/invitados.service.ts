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
}
