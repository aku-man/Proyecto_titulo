import { Component, OnInit,  } from '@angular/core';
import { ContenedorComponent} from '../contenedor/contenedor.component';
import { MenuCategoriaComponent} from '../menu-categoria/menu-categoria.component';
import {NavegacionComponent} from '../navegacion/navegacion.component';
import {SelectorImagenesComponent} from '../selector-imagenes/selector-imagenes.component';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


import {ListaPictogramas} from '../../ListaPictogramas';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {
  lista = ListaPictogramas;


  catSelectedAux: number;
  pictSelected :number;
  constructor() { }

  ngOnInit(): void {
  }

  receiveMessage($event): void{
    this.catSelectedAux = $event;
    //console.log(this.catSelectedAux);
  }
  
  recivirMensajePicto($event):void{
    this.pictSelected = $event;
    //console.log(this.pictSelected);
  }

  
}






