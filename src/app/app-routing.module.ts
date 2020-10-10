import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableroComponent } from './components/tablero/tablero.component';
import { NotImplementedComponent } from './components/not-implemented/not-implemented.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { FrasesComponent } from './components/frases/frases.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/Tablero',
    pathMatch: 'full'
  },
  {
    path: 'Tablero',
    component: TableroComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: 'Perfil',
    component: PerfilComponent
  },
  {
    path: 'Frases',
    component: FrasesComponent
  },
  {
    path: 'Ayuda',
    component: NotImplementedComponent
  },
  {
    path: 'Alumnos',
    component: NotImplementedComponent
  },
  {
    path: 'Register',
    component: RegisterComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
