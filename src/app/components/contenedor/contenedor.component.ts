import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Pictograma } from 'src/app/models/pictograma.model';
import { DropEvent } from 'angular-draggable-droppable';
import { trigger, keyframes, animate, transition } from '@angular/animations';
import * as kf from '../../keyframes';
import { Frase } from '../../models/frase.model';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Frases } from '../../models/frases.model';

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
  listaprueba = [];
  Lista: [] = [];
  @Input() pictoSelected: Pictograma = null;
  @Output() messageEvent = new EventEmitter<Pictograma[]>();
  droppedData: Pictograma = null;
  animationState: string;

  subirFrase: Frases = new Frases();

  frase: Frase = new Frase();

  tutor: any;

  existeFrase = false;
  idFrase: any;
  flag: any;

  constructor(private usuario: UsuariosService) { }
  ngOnChanges(): void{
    if (this.pictoSelected != null){
      this.listaSelect.push(this.pictoSelected);
      this.pictoSelected = null;
    }
  }

  async ngOnInit(): Promise<void> {
    this.listaFrase = [];
    
    console.log(this.usuario.tutor.uid);
    (await this.usuario.getInformationProfile(this.usuario.tutor.uid)).subscribe(async usuariosCompletos => {
      this.tutor = await usuariosCompletos;
      });
    console.log(this.listaFrase);
    await this.usuario.obtenerFrases().subscribe((frases) => {
      this.flag = frases;
      while(this.listaFrase.length > 0){
        this.listaFrase.pop();
      }
      for (const item of this.flag){
        const nuevaFrase: Frase = {
          listaPicto : [],
          frecuencia : 1,
          idFrase : ''
        };
        nuevaFrase.frecuencia = item.frecuencia;
        nuevaFrase.listaPicto = item.listaFrase;
        nuevaFrase.idFrase = item.idFrase;
        console.log(nuevaFrase);
        this.listaFrase.push(nuevaFrase);
        /* this.listaFrase.push(this.frase);
        this.listaprueba.push(item); */
      }
      console.log(this.listaFrase);
      for (let i of this.listaFrase){
        console.log(i);
      }
    });
    
  }

  eliminarPict(pict: Pictograma): void{
    const pos = this.listaSelect.indexOf(pict);
    this.listaSelect.splice(pos, 1);
  }

  limpiarTablero(): void{
    /* console.log(this.listaSelect); */
    this.listaSelect.splice(0, this.listaSelect.length);
  }

  reproducirFrase(): void{
    let frecuencia = 0;
    let id;
    for (const pict of this.listaSelect){
      const utterance = new SpeechSynthesisUtterance(pict.nombre);
      // console.log(speechSynthesis.getVoices());
      utterance.voice = speechSynthesis.getVoices()[0];
      speechSynthesis.speak(utterance);
    }

    let existe = false;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0 ; i < this.listaFrase.length ; i++){
      frecuencia = this.listaFrase[i].frecuencia;
      if (this.equals(this.listaFrase[i].listaPicto , this.listaSelect)){
        id = this.listaFrase[i].idFrase;
        frecuencia = frecuencia + 1;
        this.listaFrase[i].frecuencia ++;
        existe = true;
        break;
      }
    }
    if (!existe){
      id = 'noexiste';
      frecuencia = 1;
      /* const nuevaFrase: Frase = {
        listaPicto : [],
        frecuencia : 1,
        idFrase : ''
      }; */

      // tslint:disable-next-line: prefer-for-of
      /* for (let i = 0 ; i < this.listaSelect.length ; i++){
        nuevaFrase.listaPicto.push(this.listaSelect[i]);
      }
      console.log('nuevafrase');
      this.listaFrase.push(nuevaFrase); */
      console.log(this.listaFrase);
      const budgets = this.listaSelect.map((obj) => {return Object.assign({}, obj)});
      this.usuario.agregarFrase(budgets, frecuencia);
    }
    else {
      console.log(this.listaFrase);
      console.log(id);
      this.usuario.actualizarFrase(frecuencia, id);
      
      /* console.log('frecuencia', frecuencia);
      console.log('listaselect', budgets);
      console.log('idFrase', id); */

    }
    
    /* this.usuario.agregarFrase(budgets, frecuencia); */
    /* if (this.existeFrase === true){
       console.log('frase ya existe, crear nnueva', this.listaFrase);
      this.subirFrase.idFrase = this.idFrase;

      const budgets = this.listaSelect.map((obj) => {return Object.assign({}, obj)});
      
      this.usuario.actualizarFrase(this.subirFrase);
       console.log(budgets);
      console.log(this.subirFrase);
    } */
    /* else {
      this.usuario.agregarFrase(this.listaFrase);
      console.log('nueva frase', this.listaFrase);
    } */
    /* this.usuario.agregarFrase(this.listaFrase); */
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
