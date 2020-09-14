import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from 'src/app/models/usuario';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  usuarios:Usuario[];

  constructor(private  _comprasService: UsuariosService, private router: Router) { }

  ngOnInit(): void {
  }
  crearUsuario()
  {
    this.router.navigate(['/usuarios/crear'])
  }
}
