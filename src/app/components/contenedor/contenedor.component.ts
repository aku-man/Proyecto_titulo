import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Aux } from '../../models/auxiliar.model';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Pictograma } from 'src/app/models/pictograma.model';

import {ListaPictogramas} from '../../ListaPictogramas';

@Component({
  selector: 'app-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.css']
})
export class ContenedorComponent implements OnInit {
  lista = ListaPictogramas;
  listaPict: Pictograma[] = [];
  @Input() catSelected: number;
  @Input() pictoSelected :number;

  constructor() { }

  ngOnInit(): void {
    console.log(this.catSelected);
    console.log(this.pictoSelected);
  }

 /*  drop(event: CdkDragDrop<string[]>): void{
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
    console.log(this.catSelected);
  } */
  
  
}
