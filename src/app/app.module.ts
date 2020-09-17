import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompraComponent } from './features/compra/compra.component';
import { PaginaNoSeEncuentraComponent } from './features/pagina-no-se-encuentra/pagina-no-se-encuentra.component';
import { NavegacionComponent } from './features/navegacion/navegacion.component';
import { InicioComponent } from './features/inicio/inicio.component';
import { CalendarioComponent } from './features/calendario/calendario.component';
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

@NgModule({
  declarations: [
    AppComponent,
    CompraComponent,
    PaginaNoSeEncuentraComponent,
    NavegacionComponent,
    InicioComponent,
    CalendarioComponent,
    CategoriasEventoComponent,
    InvitadosComponent,
    CrearCategoriaEventoComponent,
    EditarCategoriaEventoComponent,
    Usuarios2Component,
    CrearUsuario2Component,
    EditarUsuario2Component,
    CrearEvento2Component,
    EditarEvento2Component,
    Eventos2Component
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
