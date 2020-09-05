import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Pictograma } from 'src/app/models/pictograma.model';
import {ListaPictogramas} from '../../ListaPictogramas';

@Component({
  selector: 'app-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.css']
})
export class ContenedorComponent implements OnInit, OnChanges {
  lista = ListaPictogramas;
  listaPict: Pictograma[] = [];
  @Input() catSelected: number;
  @Input() pictoSelected: number;
  constructor() { }
  ngOnChanges(): void{
    for (const item of this.lista){
      if (item.id === this.catSelected){
        this.listaPict = item.pictogramas;
      }
    }
  }
  ngOnInit(): void {
    console.log(this.catSelected);
    console.log(this.pictoSelected);
  }
}
