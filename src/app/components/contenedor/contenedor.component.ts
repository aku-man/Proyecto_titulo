import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Pictograma } from 'src/app/models/pictograma.model';
import { DropEvent } from 'angular-draggable-droppable';

@Component({
  selector: 'app-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.css']
})
export class ContenedorComponent implements OnInit, OnChanges {
  listaSelect: Pictograma[] = [];
  Lista: [] = [];
  @Input() pictoSelected: Pictograma = null;
  @Output() messageEvent = new EventEmitter<Pictograma[]>();
  droppedData: Pictograma = null;

  constructor() { }
  ngOnChanges(): void{
    if (this.pictoSelected != null){
      this.listaSelect.push(this.pictoSelected);
      this.pictoSelected = null;
    }
  }
  ngOnInit(): void {
  }

  eliminarPict(pict: Pictograma): void{
    const pos = this.listaSelect.indexOf(pict);
    this.listaSelect.splice(pos, 1);
  }

  limpiarTablero(): void{
    this.listaSelect.splice(0, this.listaSelect.length);
  }

  reproducirFrase(): void{
    for (const pict of this.listaSelect){
      const utterance = new SpeechSynthesisUtterance(pict.nombre);
      console.log(speechSynthesis.getVoices());
      utterance.voice = speechSynthesis.getVoices()[0];
      speechSynthesis.speak(utterance);
    }
  }

  onDrop({ dropData }: DropEvent<Pictograma>): void {
    if (dropData){
      const found = this.listaSelect.includes(dropData);
      if (!found){
        this.listaSelect.push(dropData);
      }
    }
  }

  dragEnd(event, item): void {
    console.log('Element was dragged', event);
    const pos = this.listaSelect.indexOf(item);
    this.listaSelect.splice(pos, 1);
  }
}
