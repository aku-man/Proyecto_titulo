import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableroComponent } from './components/tablero/tablero.component';
import { NotImplementedComponent } from './components/not-implemented/not-implemented.component';

const routes: Routes = [
  {
    path: '',
    component: TableroComponent
  },
  {
    path: 'Perfi',
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
