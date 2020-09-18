import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompraComponent } from './features/compra/compra.component';
import { InicioComponent } from './features/inicio/inicio.component';
import { CalendarioComponent } from './features/calendario/calendario.component';
import { PaginaNoSeEncuentraComponent } from './features/pagina-no-se-encuentra/pagina-no-se-encuentra.component';
import { CategoriasEventoComponent } from './features/categorias-evento/categorias-evento.component';
import { InvitadosComponent } from './features/invitados/invitados.component';
import { CrearCategoriaEventoComponent } from './features/crear-categoria-evento/crear-categoria-evento.component';
import { EditarCategoriaEventoComponent } from './features/editar-categoria-evento/editar-categoria-evento.component';
import { Usuarios2Component } from './features/usuarios2/usuarios2.component';
import { CrearUsuario2Component } from './features/crear-usuario2/crear-usuario2.component';
import { EditarUsuario2Component } from './features/editar-usuario2/editar-usuario2.component';
import { CrearEvento2Component } from './features/crear-evento2/crear-evento2.component';
import { EditarEvento2Component } from './features/editar-evento2/editar-evento2.component';
import { Eventos2Component } from './features/eventos2/eventos2.component';
import { CrearCompraComponent } from './features/crear-compra/crear-compra.component';
import { EditarCompraComponent } from './features/editar-compra/editar-compra.component';
import { CrearInvitadoComponent } from './features/crear-invitado/crear-invitado.component';
import { EditarInvitadoComponent } from './features/editar-invitado/editar-invitado.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'usuarios2', component: Usuarios2Component },
  { path: 'usuarios2/crear', component:CrearUsuario2Component },
  { path: 'usuarios2/editar/:id', component:EditarUsuario2Component},
  { path: 'compras', component: CompraComponent },
  { path: 'compras/crear', component:CrearCompraComponent },
  { path: 'compras/editar/:id', component:EditarCompraComponent},
  { path: 'invitados', component: InvitadosComponent },
  { path: 'invitados/crear', component:CrearInvitadoComponent },
  { path: 'invitados/editar/:id', component:EditarInvitadoComponent},
  { path: 'eventos2', component: Eventos2Component },
  { path: 'categoriasEvento', component: CategoriasEventoComponent },
  { path: 'categoriasEvento/crear', component:CrearCategoriaEventoComponent },
  { path: 'categoriasEvento/editar/:id', component:EditarCategoriaEventoComponent},
  { path: 'eventos2', component: Eventos2Component },
  { path: 'eventos2/crear', component:CrearEvento2Component },
  { path: 'eventos2/editar/:id', component:EditarEvento2Component},
  { path: 'calendarios', component: CalendarioComponent },
  {path :'**', component:PaginaNoSeEncuentraComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
