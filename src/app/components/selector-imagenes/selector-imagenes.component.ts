import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Pictograma } from 'src/app/models/pictograma.model';
import { ImagenesService } from 'src/app/services/imagenes.service';
import { Grupo } from 'src/app/models/grupo.model';
import { Categoria } from 'src/app/models/categoria.model';


@Component({
  selector: 'app-selector-imagenes',
  templateUrl: './selector-imagenes.component.html',
  styleUrls: ['./selector-imagenes.component.css']
})
export class SelectorImagenesComponent implements OnInit, OnChanges {
  listaPicto: Pictograma[] = [];
  arregloDireccion: Grupo[] = [];
  listaCategoria: any[] = [];
  lista: any;
  lista2: any;
  lista3: any[] = [];
  categoriaid: string;

  constructor(private route: ActivatedRoute, private imagenes: ImagenesService) {
  }

  @Input() catSelected: string;
  @Output() messageEvent = new EventEmitter<Pictograma>();

  escogerPicto(pic: Pictograma): void{
    this.messageEvent.emit(pic);
    const utterance = new SpeechSynthesisUtterance(pic.nombre);
    console.log(speechSynthesis.getVoices());
    utterance.voice = speechSynthesis.getVoices()[0];
    speechSynthesis.speak(utterance);
  }
  ngOnChanges(changes: SimpleChanges): void {
    /* this.imagenes.obtenerCategoriaN(this.catSelected).subscribe((pictograma) => {
      this.listaPicto = pictograma;
    }); */
  }
  ngOnInit(): void {
    this.inicio();
  }


  escogerGrupo(grupo: Grupo): void{
    this.categoriaid = grupo.idGrupo;
    this.arregloDireccion.push(grupo);
    this.imagenes.retornaItems().subscribe((item) => {
      this.lista2 = item;
      for (const i of this.lista2){
        if (this.categoriaid === i.idGrupo){
          this.lista3.push(i);
        }
      }
    });
  }

  escogerCategoria(categoria: Categoria): void {
    this.arregloDireccion.push(categoria);
    this.imagenes.obtenerCategoriaN(categoria.nombre).subscribe((pictograma) => {
      this.listaPicto = pictograma;
    });
  }

  inicio(): void{
    this.arregloDireccion = [];
    this.lista3 = [];
    this.imagenes.obtenerGrupos().subscribe(items => {
      this.lista = items;
    });
  }

  volver(ruta: any): void{
    const posicion = this.arregloDireccion.indexOf(ruta);
    if (posicion === 1){
      return;
    }
    else{
      this.arregloDireccion = [];
      this.escogerCategoria(ruta);
    }
  }
}
