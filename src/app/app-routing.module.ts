import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompraComponent } from './features/compra/compra.component';
import { InicioComponent } from './features/inicio/inicio.component';
import { CalendarioComponent } from './features/calendario/calendario.component';
import { PaginaNoSeEncuentraComponent } from './features/pagina-no-se-encuentra/pagina-no-se-encuentra.component';
import { CrearUsuarioComponent } from './features/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './features/editar-usuario/editar-usuario.component';
import { CategoriasEventoComponent } from './features/categorias-evento/categorias-evento.component';
import { EventoComponent,  } from './features/eventos/eventos.component';
import { InvitadosComponent } from './features/invitados/invitados.component';
import { UsuariosComponent } from './features/usuarios/usuarios.component';
import { CrearCategoriaEventoComponent } from './features/crear-categoria-evento/crear-categoria-evento.component';
import { CrearEventoComponent } from './features/crear-evento/crear-evento.component';
import { EditarCategoriaEventoComponent } from './features/editar-categoria-evento/editar-categoria-evento.component';
import { EditarEventoComponent } from './features/editar-evento/editar-evento.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'usuarios/crear', component:CrearUsuarioComponent },
  { path: 'usuarios/editar/:id', component:EditarUsuarioComponent},
  { path: 'compras', component: CompraComponent },
  { path: 'invitados', component: InvitadosComponent },
  { path: 'categoriasEvento', component: CategoriasEventoComponent },
  { path: 'categoriasEvento/crear', component:CrearCategoriaEventoComponent },
  { path: 'categoriasEvento/editar/:id', component:EditarCategoriaEventoComponent},
  { path: 'eventos', component: EventoComponent },
  { path: 'eventos/crear', component:CrearEventoComponent },
  { path: 'eventos/editar/:id', component:EditarEventoComponent},
  { path: 'calendarios', component: CalendarioComponent },
  {path :'**', component:PaginaNoSeEncuentraComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
