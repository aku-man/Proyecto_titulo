import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Comoponentes del proyecto
import { AppComponent } from './app.component';
import { TableroComponent } from './components/tablero/tablero.component';
import { MenuCategoriaComponent } from './components/menu-categoria/menu-categoria.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { ContenedorComponent } from './components/contenedor/contenedor.component';
import { SelectorImagenesComponent } from './components/selector-imagenes/selector-imagenes.component';
import { NotImplementedComponent } from './components/not-implemented/not-implemented.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DigitalClockComponent } from './components/digital-clock/digital-clock.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { FrasesComponent } from './components/frases/frases.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

// Modulos del proyecto
import { AngularFireModule } from '@angular/fire';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MatMenuModule } from '@angular/material/menu';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


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
    LoginComponent,
    RegisterComponent,
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
    DragAndDropModule,
    FormsModule,
    ReactiveFormsModule,
    NgxAuthFirebaseUIModule.forRoot(
      {
        apiKey: 'AIzaSyCY56PtNlDTIqLsz01p-sexG6JvadnFlBA',
    authDomain: 'tablero-de-comunicacion-2020.firebaseapp.com',
    databaseURL: 'https://tablero-de-comunicacion-2020.firebaseio.com',
    projectId: 'tablero-de-comunicacion-2020',
    storageBucket: 'tablero-de-comunicacion-2020.appspot.com',
    messagingSenderId: '1055519146604',
    appId: '1:1055519146604:web:4746e0c7eeae75cf500e49',
    measurementId: 'G-046X600GL7'
      },
       () => 'Tablero',
      {
        enableFirestoreSync: true, // enable/disable autosync users with firestore
        toastMessageOnAuthSuccess: true, // whether to open/show a snackbar message on auth success - default : true
        toastMessageOnAuthError: false, // whether to open/show a snackbar message on auth error - default : true
        authGuardFallbackURL: '/Login', // url for unauthenticated users - to use in combination with canActivate feature on a route
        authGuardLoggedInURL: '/Tablero', // url for authenticated users - to use in combination with canActivate feature on a route
        passwordMaxLength: 60, // `min/max` input parameters in components should be within this range.
        passwordMinLength: 8, // Password length min/max in forms independently of each componenet min/max.
        // Same as password but for the name
        nameMaxLength: 50,
        nameMinLength: 2,
        // If set, sign-in/up form is not available until email has been verified.
        // Plus protected routes are still protected even though user is connected.
        guardProtectedRoutesUntilEmailIsVerified: true,
        enableEmailVerification: true, // default: true
      }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
