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
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DigitalClockComponent } from './components/digital-clock/digital-clock.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { FrasesComponent } from './components/frases/frases.component';
import { AngularFireModule } from '@angular/fire';

import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MatMenuModule } from '@angular/material/menu';
import { DragAndDropModule } from 'angular-draggable-droppable';



@NgModule({
  declarations: [
    AppComponent,
    TableroComponent,
    MenuCategoriaComponent,
    NavegacionComponent,
    ContenedorComponent,
    SelectorImagenesComponent,
    NotImplementedComponent,
    NotFoundComponent,
    DigitalClockComponent,
    PerfilComponent,
    FrasesComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    MatMenuModule,
    DragAndDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
