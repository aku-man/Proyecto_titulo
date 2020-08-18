import { Component, OnInit } from '@angular/core';
import { ContenedorComponent} from '../contenedor/contenedor.component';
import { MenuCategoriaComponent} from '../menu-categoria/menu-categoria.component';
import {NavegacionComponent} from '../navegacion/navegacion.component';
import {SelectorImagenesComponent} from '../selector-imagenes/selector-imagenes.component';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
