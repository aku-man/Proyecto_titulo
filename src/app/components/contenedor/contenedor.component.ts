import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Pictograma } from '../../models/pictograma.model';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.css']
})
export class ContenedorComponent implements OnInit {

  @Input()
  pictoRecibed: EventEmitter<CdkDragDrop<string[]>>;

  listaPict: Pictograma[];

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>): void {
    console.log('2');
    if (event.previousContainer !== event.container) {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
