import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  apiURL='https://localhost:44302/api/Usuario ';

  constructor(private http: HttpClient) { }
  obtenerUsuario(id:Number)
  {
    return this.http.get<Usuario[]>(this.apiURL + '/' +id);
  }
  obtenerUsuarios()
  {
    return this.http.get<Usuario[]>(this.apiURL);
  }
  crearUsuario(usuario: Usuario)
  {
    return this.http.post<Usuario>(this.apiURL, usuario);
  }
  editarUsuario(usuario: Usuario)
  {
    return this.http.put<Usuario>(this.apiURL + '/' + usuario.id, usuario);
  }
  eliminarUsuario(id: Number)
  {
    return this.http.delete<Usuario>(this.apiURL + "/" + id);
  }
}
