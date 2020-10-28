import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Pictograma } from 'src/app/models/pictograma.model';
import { DropEvent } from 'angular-draggable-droppable';
import { trigger, keyframes, animate, transition } from '@angular/animations';
import * as kf from '../../keyframes';
import { Frase } from '../../models/frase.model';

@Component({
  selector: 'app-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.css'],
  animations: [
    trigger('pictogramAnimator', [
      transition('* => shakeX', animate(1000, keyframes(kf.shakeX))),
    ])
  ]
})
export class ContenedorComponent implements OnInit, OnChanges {
  listaSelect: Pictograma[] = [];
  listaFrase: Frase[] = [];
  Lista: [] = [];
  @Input() pictoSelected: Pictograma = null;
  @Output() messageEvent = new EventEmitter<Pictograma[]>();
  droppedData: Pictograma = null;
  animationState: string;

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
    /* console.log(this.listaSelect); */
    // this.listaSelect.splice(0, this.listaSelect.length);
  }

  reproducirFrase(): void{
    for (const pict of this.listaSelect){
      const utterance = new SpeechSynthesisUtterance(pict.nombre);
      // console.log(speechSynthesis.getVoices());
      utterance.voice = speechSynthesis.getVoices()[0];
      speechSynthesis.speak(utterance);
    }

    let existe = false;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0 ; i < this.listaFrase.length ; i++){
      if (this.equals(this.listaFrase[i].listaPicto , this.listaSelect)){
        this.listaFrase[i].frecuencia ++;
        existe = true;
        break;
      }
    }
    if (!existe){
      const nuevaFrase: Frase = {
        listaPicto : [],
        frecuencia : 1
      };

      // tslint:disable-next-line: prefer-for-of
      for (let i = 0 ; i < this.listaSelect.length ; i++){
        nuevaFrase.listaPicto.push(this.listaSelect[i]);
      }

      this.listaFrase.push(nuevaFrase);
    }
    /* console.log(this.listaFrase); */
  }

  onDrop({ dropData }: DropEvent<Pictograma>): void {
    if (dropData){
      let found = false;
      for (const item of this.listaSelect) {
        if (item.nombre === dropData.nombre){
          found = true;
          break;
        }
      }

      if (!found){
        this.listaSelect.push(dropData);
      }
      else{
        this.startAnimation('shakeX');
      }
    }
  }

  dragEnd(event, item): void {
    // console.log('Element was dragged', event);
    const pos = this.listaSelect.indexOf(item);
    this.listaSelect.splice(pos, 1);
  }


  startAnimation(state: string): void{
    /* console.log(this.animationState); */
    if (!this.animationState){
      this.animationState = state;
    }

  }

  resetAnimationState(): void{
    this.animationState = '';
  }

  equals(a: Pictograma[], b: Pictograma[]): boolean{
    if (a.length > b.length){
      return false;
    }
    else{
      if (b.length > a.length){
        return false;
      }
    }

    for (let i = 0 ; i < a.length ; i++){
      if (a[i].nombre !== b[i].nombre){
        return false;
      }
    }

    return true;
  }
}
