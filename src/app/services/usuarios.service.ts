import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  apiURL='https://localhost:44302/api/Usuario ';

  constructor(private http: HttpClient) { }
  obtenerUsuarios()
  {
    return this.http.get<Usuario[]>(this.apiURL);
  }
}
