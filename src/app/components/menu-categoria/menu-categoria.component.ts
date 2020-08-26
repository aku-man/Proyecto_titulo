import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { Categoria } from '../../models/categoria.model';
import {ListaCategorias} from '../../ListaCategorias';

@Component({
  selector: 'app-menu-categoria',
  templateUrl: './menu-categoria.component.html',
  styleUrls: ['./menu-categoria.component.css']
})
export class MenuCategoriaComponent implements OnInit{

  categorias = ListaCategorias;

  constructor() { }

  @Output() messageEvent = new EventEmitter<number>();

  ngOnInit(): void {
  }

  escojerCat(id: number): void{
    this.messageEvent.emit(id);
  }
}
