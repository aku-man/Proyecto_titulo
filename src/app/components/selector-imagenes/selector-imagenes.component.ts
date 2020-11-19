import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Pictograma } from 'src/app/models/pictograma.model';
import { ImagenesService } from 'src/app/services/imagenes.service';
import { Grupo } from 'src/app/models/grupo.model';
import { Categoria } from 'src/app/models/categoria.model';
import { DropEvent } from 'angular-draggable-droppable';
import { UsuariosService } from 'src/app/services/usuarios.service';


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
  lista4: any[] = [];
  categoriaid: string;

  datosCargados = false;
  id: any = null;
  personalizada = null;
  algo: any;

  constructor(private route: ActivatedRoute, private imagenes: ImagenesService, private usuario: UsuariosService) {
  }

  @Input() catSelected: string;
  @Output() messageEvent = new EventEmitter<Pictograma>();

  escogerPicto(pic: Pictograma): void{
    this.messageEvent.emit(pic);
    const utterance = new SpeechSynthesisUtterance(pic.nombre);
    /* console.log(speechSynthesis.getVoices()); */
    utterance.voice = speechSynthesis.getVoices()[0];
    speechSynthesis.speak(utterance);
  }
  ngOnChanges(changes: SimpleChanges): void {
    /* this.imagenes.obtenerCategoriaN(this.catSelected).subscribe((pictograma) => {
      this.listaPicto = pictograma;
    }); */
    if (this.id === null){
      this.conseguirId();
    }
    this.inicio();
  }
  ngOnInit(){
    /* this.inicio(); */
  }

  conseguirId(){
    this.usuario.obtenerUser().then( async user => {
      (await this.usuario.getInformationProfile(user.uid)).subscribe(usuariosCompletos => {
        this.algo = usuariosCompletos;
        this.id = this.algo.usuarioCargado;
        console.log(this.id);
        if ((this.id === null) || (this.id === undefined)){
        this.datosCargados = false;
        }
        else {
        this.datosCargados = true;
        }
      });
    });
  }


  async escogerGrupo(grupo: Grupo){
    this.conseguirId();
    if (grupo.idGrupo === 'sTMqvckVT2YutTDmoXzD') {
      this.personalizada = 1;
    }
    this.lista2 = [];
    console.log(this.id);
    console.log(this.datosCargados);
    this.categoriaid = grupo.idGrupo;
    this.arregloDireccion.push(grupo);
    /* if ((grupo.idGrupo === 'sTMqvckVT2YutTDmoXzD') && ((this.id === null) || (this.id === undefined))){
      document.getElementById('categoria').innerHTML = '<div><h1>No hay usuario cargado</h1></div>';
    }
    else{
      document.getElementById('categoria').innerHTML = '';
    } */
    await this.imagenes.retornaItems(grupo.idGrupo, this.id).subscribe((item) => {
      this.lista2 = item;
      console.log(this.lista2);
      if (grupo.idGrupo === 'sTMqvckVT2YutTDmoXzD'){
        for (const i of this.lista2){
          this.lista3.push(i);
        }
        if (this.lista3.length === 0){
          document.getElementById('categoria').innerHTML = '<div><h1>Debe crear Categorias en la sección <a routerLink="/Perfil">Perfil</a>.</h1></div>';
        }
        else if (this.lista3.length > 0){
          document.getElementById('categoria').innerHTML = '';
        }
        else if ((this.id === null) || (this.id === undefined)){
          console.log(this.id);
          document.getElementById('categoria').innerHTML = '<div><h1>Para poder utilizar sus propias categorias y pictogramas, identifiquese</h1></div>';
        }
        console.log(this.id);
        this.personalizada = 1;
      }
      else {
        for (const i of this.lista2){
          if (this.categoriaid === i.idGrupo){
            this.lista3.push(i);
          }
        }
        this.personalizada = null;
      }
      console.log(this.lista3, this.personalizada);
    });
  }

  escogerCategoria(categoria: Categoria): void {
    this.listaPicto = [];
    console.log(categoria);
    this.arregloDireccion.push(categoria);
    if (this.personalizada === 1 ){
      this.imagenes.obtenerPictogramas(this.id).subscribe((pictograma) => {
        console.log(pictograma);
        for (const item of pictograma ){
          if ( categoria.idCategoria === item.idCategoria){
            this.listaPicto.push(item);
          }
        }
        if (this.listaPicto.length === 0){
          document.getElementById('pictograma').innerHTML = '<div><h1>Debe crear Pictogramas en la sección <a routerLink="/Perfil">Perfil</a>.</h1></div>';
        }
        else {
          document.getElementById('pictograma').innerHTML = '';
        }
      });
    }
    else {
      this.imagenes.obtenerCategoriaN(categoria.nombre).subscribe((pictograma) => {
        this.listaPicto = pictograma;
      });
    }
    console.log(this.listaPicto);
  }

  inicio(): void{
    this.arregloDireccion = [];
    this.lista3 = [];
    this.lista4 = [];
    this.imagenes.obtenerGrupos().subscribe(items => {
      this.lista = items;
      if ((this.usuario.tutor.uid === null) || (this.usuario.tutor.uid === undefined)){
        this.lista4.push(this.lista[0]);
        this.lista4.push(this.lista[1]);
      }
      else {
        this.lista4.push(this.lista[0]);
        this.lista4.push(this.lista[1]);
        this.lista4.push(this.lista[2]);
      }
      this.lista = this.lista4;
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

  onDrop({ dropData }: DropEvent<Pictograma>): void {
    if (dropData){
      this.listaPicto.push(dropData);
    }
  }

  dragEnd(event, item): void {
    // console.log('Element was dragged', event);
    // if (item){
    //   const pos = this.listaPicto.indexOf(item);
    //   this.listaPicto.splice(pos, 1);
    // }
  }
}
