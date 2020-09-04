import { Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
// import { Pictograma } from '../../models/pictograma.model';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
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

  ngOnChanges(changes: SimpleChanges): void {
    for (const item of this.listaAux) {
      if(item.id === this.catSelected){
        this.listaPicto = item.pictogramas;
      }
    }
  }

  ngOnInit(): void {
    // this.route.paramMap.subscribe(params =>{
    //   const categoria = Number(params.get('categoriaId'));
    //   console.log(categoria);
    //   this.lista = this.listaPicto.find(id => id.id === categoria);
    //   this.categoriaid = categoria;
    //   console.log(this.categoriaid);
    //   console.log(this.lista);
    //   });
  }

  drop(event: CdkDragDrop<string[]>): void{
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
