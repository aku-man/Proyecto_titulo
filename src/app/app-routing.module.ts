import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableroComponent } from './components/tablero/tablero.component';
import { NotImplementedComponent } from './components/not-implemented/not-implemented.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import {MenuCategoriaComponent} from './components/menu-categoria/menu-categoria.component';
import {SelectorImagenesComponent} from './components/selector-imagenes/selector-imagenes.component';


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
    path: 'Perfil',
    component: NotImplementedComponent
  },
  {
    path: 'Frases',
    component: NotImplementedComponent
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
    path: '**',
    component: NotFoundComponent
  },
  {path:'', component:MenuCategoriaComponent},
  {path: 'selector-imagenes/categoriaId', component: SelectorImagenesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
