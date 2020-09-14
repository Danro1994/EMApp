import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompraComponent } from './features/compra/compra.component';
import { UsuarioComponent } from './features/usuario/usuario.component';
import { PaginaNoSeEncuentraComponent } from './features/pagina-no-se-encuentra/pagina-no-se-encuentra.component';
import { NavegacionComponent } from './features/navegacion/navegacion.component';
import { CrearUsuarioComponent } from './features/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './features/editar-usuario/editar-usuario.component';
import { InicioComponent } from './features/inicio/inicio.component';
import { CalendarioComponent } from './features/calendario/calendario.component';
import { CategoriasEventoComponent } from './features/categorias-evento/categorias-evento.component';
import { EventoComponent } from './features/eventos/eventos.component';
import { InvitadosComponent } from './features/invitados/invitados.component';

@NgModule({
  declarations: [
    AppComponent,
    CompraComponent,
    UsuarioComponent,
    PaginaNoSeEncuentraComponent,
    NavegacionComponent,
    CrearUsuarioComponent,
    EditarUsuarioComponent,
    InicioComponent,
    CalendarioComponent,
    CategoriasEventoComponent,
    EventoComponent,
    InvitadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
