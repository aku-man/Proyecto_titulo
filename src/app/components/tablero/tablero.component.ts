import { Component, OnInit,  } from '@angular/core';
import {ListaPictogramas} from '../../ListaPictogramas';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {
  lista = ListaPictogramas;
  catSelectedAux: number;
  pictSelected: number;
  constructor() { }

  ngOnInit(): void {
  }

  receiveMessage($event): void{
    this.catSelectedAux = $event;
  }

  recivirMensajePicto($event): void{
    this.pictSelected = $event;
  }
}






