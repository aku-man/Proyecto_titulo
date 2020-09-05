import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ListaPictogramas} from '../../ListaPictogramas';
import { Aux } from '../../models/auxiliar.model';
import { Pictograma } from 'src/app/models/pictograma.model';

@Component({
  selector: 'app-selector-imagenes',
  templateUrl: './selector-imagenes.component.html',
  styleUrls: ['./selector-imagenes.component.css']
})
export class SelectorImagenesComponent implements OnInit, OnChanges {

  listaAux: Aux[] = ListaPictogramas;
  listaPicto: Pictograma[] = [];
  lista: any;
  categoriaid: number;
  constructor(private route: ActivatedRoute) { }

  @Input() catSelected: number;
  @Output() messageEvent = new EventEmitter<number>();

  escogerPicto(id: number): void{
    this.messageEvent.emit(id);
    // console.log(id);
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const item of this.listaAux) {
      if (item.id === this.catSelected){
        this.listaPicto = item.pictogramas;
      }
    }
  }

  ngOnInit(): void {
    // this.escogerPicto(5);
  }

}
