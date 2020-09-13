import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompraComponent } from './features/compra/compra.component';
import { InicioComponent } from './features/inicio/inicio.component';
import { UsuarioComponent } from './features/usuario/usuario.component';
import { InvitadoComponent } from './features/invitado/invitado.component';
import { CalendarioComponent } from './features/calendario/calendario.component';
import { CategoriaEventoComponent } from './features/categoria-evento/categoria-evento.component';
import { EventoComponent } from './features/evento/evento.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'usuarios', component: UsuarioComponent },
  { path: 'compras', component: CompraComponent },
  { path: 'invitados', component: InvitadoComponent },
  { path: 'categoriasEvento', component: CategoriaEventoComponent },
  { path: 'eventos', component: EventoComponent },
  { path: 'calendarios', component: CalendarioComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
