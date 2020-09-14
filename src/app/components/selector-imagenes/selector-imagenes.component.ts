import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Aux } from '../../models/auxiliar.model';
import { Pictograma } from 'src/app/models/pictograma.model';
import { ImagenesService } from 'src/app/services/imagenes.service';

@Component({
  selector: 'app-selector-imagenes',
  templateUrl: './selector-imagenes.component.html',
  styleUrls: ['./selector-imagenes.component.css']
})
export class SelectorImagenesComponent implements OnInit, OnChanges {

  // listaAux: Aux[] = ListaPictogramas;
  listaPicto: any[] = [];
  lista: any;
  categoriaid: number;
  constructor(private route: ActivatedRoute, private imagenes: ImagenesService) {
  }

  @Input() catSelected: string;
  @Output() messageEvent = new EventEmitter<Pictograma>();

  escogerPicto(pic: Pictograma): void{
    this.messageEvent.emit(pic);
    // console.log(id);
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.imagenes.obtenerCategoriaN(this.catSelected).subscribe((pictograma) => {
      this.listaPicto = pictograma;
    });
  }
  ngOnInit(): void {
  }
}
