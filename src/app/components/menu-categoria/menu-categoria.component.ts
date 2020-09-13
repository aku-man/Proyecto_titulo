import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ListaCategorias} from '../../ListaCategorias';
import {ImagenesService} from './../../services/imagenes.service';



@Component({
  selector: 'app-menu-categoria',
  templateUrl: './menu-categoria.component.html',
  styleUrls: ['./menu-categoria.component.css']
})
export class MenuCategoriaComponent implements OnInit{
  categorias = ListaCategorias;
  categoria: any;
  constructor(private imagenes: ImagenesService) {
    this.imagenes.retornaItems().subscribe(items => {
      this.categoria = items;
    });
   }

  @Output() messageEvent = new EventEmitter<string>();
  ngOnInit(): void {
    /* this.escogerCat('Pruebas Medicas'); */
  }
  escogerCat(nombre: string): void{

    this.messageEvent.emit(nombre);
  }
}
