import { Component, OnInit,  } from '@angular/core';
import { Pictograma } from 'src/app/models/pictograma.model';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {
  catSelectedAux: string;
  pictSelected: number;
  listaSelected: Pictograma[];
  constructor() {
  }

  ngOnInit(): void {
  }

  receiveMessage($event): void{
    this.catSelectedAux = $event;
  }

  recivirMensajePicto($event): void{
    this.pictSelected = $event;
  }

  recivirMensajeListaPicto($event): void{
    this.listaSelected = $event;
  }
}






