import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ImagenesService} from './../../services/imagenes.service';

@Component({
  selector: 'app-menu-categoria',
  templateUrl: './menu-categoria.component.html',
  styleUrls: ['./menu-categoria.component.css']
})
export class MenuCategoriaComponent implements OnInit{
  categoria: any;
  constructor(private imagenes: ImagenesService) {
    this.imagenes.retornaItems().subscribe(items => {
      this.categoria = items;
    });
   }

  @Output() messageEvent = new EventEmitter<string>();
  ngOnInit(): void {
     this.escogerCat('¿Que tengo?', false);
  }
  escogerCat(nombre: string, activado: boolean): void{
    if ( activado === true){
      this.messageEvent.emit(nombre);
      const utterance = new SpeechSynthesisUtterance(nombre);
      utterance.voice = speechSynthesis.getVoices()[0];
      speechSynthesis.speak(utterance);
    }
    else{
      this.messageEvent.emit(nombre);
    }
  }
}
