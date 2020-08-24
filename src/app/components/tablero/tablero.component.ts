import { Component, OnInit, EventEmitter } from '@angular/core';
import { ContenedorComponent} from '../contenedor/contenedor.component';
import { MenuCategoriaComponent} from '../menu-categoria/menu-categoria.component';
import {NavegacionComponent} from '../navegacion/navegacion.component';
import {SelectorImagenesComponent} from '../selector-imagenes/selector-imagenes.component';

import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {

  pictToSend: EventEmitter<CdkDragDrop<string[]>>;

  constructor() { }

  ngOnInit(): void {
  }

}
