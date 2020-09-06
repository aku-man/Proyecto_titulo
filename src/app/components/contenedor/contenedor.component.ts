import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Pictograma } from 'src/app/models/pictograma.model';

@Component({
  selector: 'app-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.css']
})
export class ContenedorComponent implements OnInit, OnChanges {
  listaSelect: Pictograma[] = [];
  @Input() catSelected: number;
  @Input() pictoSelected: Pictograma = null;
  @Output() messageEvent = new EventEmitter<Pictograma[]>();

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

  guardarFrase(): void{
    this.messageEvent.emit(this.listaSelect);
  }
}
