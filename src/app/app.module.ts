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
import { InvitadoComponent } from './features/invitado/invitado.component';
import { CalendarioComponent } from './features/calendario/calendario.component';
import { CategoriaEventoComponent } from './features/categoria-evento/categoria-evento.component';
import { EventoComponent } from './features/evento/evento.component';

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
    InvitadoComponent,
    CalendarioComponent,
    CategoriaEventoComponent,
    EventoComponent
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
