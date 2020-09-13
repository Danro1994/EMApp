import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompraComponent } from './features/compra/compra.component';
import { InicioComponent } from './features/inicio/inicio.component';
import { UsuarioComponent } from './features/usuario/usuario.component';
import { InvitadoComponent } from './features/invitado/invitado.component';
import { CalendarioComponent } from './features/calendario/calendario.component';
import { CategoriaEventoComponent } from './features/categoria-evento/categoria-evento.component';
import { EventoComponent } from './features/evento/evento.component';
import { PaginaNoSeEncuentraComponent } from './features/pagina-no-se-encuentra/pagina-no-se-encuentra.component';
import { CrearUsuarioComponent } from './features/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './features/editar-usuario/editar-usuario.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'usuarios', component: UsuarioComponent },
  { path: 'usuarios/crear', component:CrearUsuarioComponent },
  { path: 'usuarios/editar/:id', component:EditarUsuarioComponent},
  { path: 'compras', component: CompraComponent },
  { path: 'invitados', component: InvitadoComponent },
  { path: 'categoriasEvento', component: CategoriaEventoComponent },
  { path: 'eventos', component: EventoComponent },
  { path: 'calendarios', component: CalendarioComponent },
  {path :'**', component:PaginaNoSeEncuentraComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
