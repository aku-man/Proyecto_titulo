import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../models/categoria.model';

@Component({
  selector: 'app-menu-categoria',
  templateUrl: './menu-categoria.component.html',
  styleUrls: ['./menu-categoria.component.css']
})
export class MenuCategoriaComponent implements OnInit{

  categorias: Categoria[] =[
    {
      id: 1,
      nombre: 'Categoria 1'
    },
    {
      id: 2,
      nombre: 'Categoria 2'
    },
    {
      id: 3,
      nombre: 'Categoria 3'
    },
    {
      id: 4,
      nombre: 'Categoria 4'
    },
    {
      id: 5,
      nombre: 'Categoria 5'
    },
    {
      id: 6,
      nombre: 'Categoria 6'
    },
    {
      id: 7,
      nombre: 'Categoria 7'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
