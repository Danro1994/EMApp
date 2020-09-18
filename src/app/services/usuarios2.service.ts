import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class Usuarios2Service {
  apiURL='https://localhost:44302/api/usuario';

  constructor(private http: HttpClient) { }
  obtenerUsuarios2()
    {
      return this.http.get<Usuario[]>(this.apiURL);
    }
    obtenerUsuario2(id:Number)
    {
      return this.http.get<Usuario[]>(this.apiURL + '/' +id);
    }
    crearUsuario2(usuario: Usuario)
    {
      return this.http.post<Usuario>(this.apiURL, usuario);
    }
    editarUsuario2(usuario: Usuario)
    {
      return this.http.put<Usuario>(this.apiURL + '/' + usuario.id, usuario);
    }
    eliminarUsuario2(id: Number)
    {
      return this.http.delete(this.apiURL + "/" + id);
    }
}
