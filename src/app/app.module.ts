import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompraComponent } from './features/compra/compra.component';
import { PaginaNoSeEncuentraComponent } from './features/pagina-no-se-encuentra/pagina-no-se-encuentra.component';
import { NavegacionComponent } from './features/navegacion/navegacion.component';
import { CrearUsuarioComponent } from './features/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './features/editar-usuario/editar-usuario.component';
import { InicioComponent } from './features/inicio/inicio.component';
import { CalendarioComponent } from './features/calendario/calendario.component';
import { CategoriasEventoComponent } from './features/categorias-evento/categorias-evento.component';
import { EventoComponent } from './features/eventos/eventos.component';
import { InvitadosComponent } from './features/invitados/invitados.component';
import { UsuariosComponent } from './features/usuarios/usuarios.component';
import { CrearCategoriaEventoComponent } from './features/crear-categoria-evento/crear-categoria-evento.component';
import { CrearEventoComponent } from './features/crear-evento/crear-evento.component';
import { EditarCategoriaEventoComponent } from './features/editar-categoria-evento/editar-categoria-evento.component';
import { EditarEventoComponent } from './features/editar-evento/editar-evento.component';

@NgModule({
  declarations: [
    AppComponent,
    CompraComponent,
    PaginaNoSeEncuentraComponent,
    NavegacionComponent,
    CrearUsuarioComponent,
    EditarUsuarioComponent,
    InicioComponent,
    CalendarioComponent,
    CategoriasEventoComponent,
    EventoComponent,
    InvitadosComponent,
    UsuariosComponent,
    CrearCategoriaEventoComponent,
    CrearEventoComponent,
    EditarCategoriaEventoComponent,
    EditarEventoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
