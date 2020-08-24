import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pictograma } from '../../models/pictograma.model';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-selector-imagenes',
  templateUrl: './selector-imagenes.component.html',
  styleUrls: ['./selector-imagenes.component.css']
})
export class SelectorImagenesComponent implements OnInit {

  constructor() { }

  listaPicto: Pictograma[] = [
    {
      id: 1,
      nombre: 'picto 1',
      imagen: 'None'
    },
    {
      id: 2,
      nombre: 'picto 2',
      imagen: 'None'
    },
    {
      id: 3,
      nombre: 'picto 3',
      imagen: 'None'
    },
    {
      id: 4,
      nombre: 'picto 4',
      imagen: 'None'
    },
    {
      id: 5,
      nombre: 'picto 5',
      imagen: 'None'
    },
    {
      id: 6,
      nombre: 'picto 6',
      imagen: 'None'
    },
    {
      id: 7,
      nombre: 'picto 7',
      imagen: 'None'
    }
  ];

  @Output()
  pictSelected: EventEmitter<CdkDragDrop<string[]>>;

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>): void{
    console.log('1');
    if (event.previousContainer !== event.container) {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
