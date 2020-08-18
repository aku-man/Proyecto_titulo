import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableroComponent } from './components/tablero/tablero.component';
import { MenuCategoriaComponent } from './components/menu-categoria/menu-categoria.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { ContenedorComponent } from './components/contenedor/contenedor.component';
import { SelectorImagenesComponent } from './components/selector-imagenes/selector-imagenes.component';
import { NotImplementedComponent } from './components/not-implemented/not-implemented.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TableroComponent,
    MenuCategoriaComponent,
    NavegacionComponent,
    ContenedorComponent,
    SelectorImagenesComponent,
    NotImplementedComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
