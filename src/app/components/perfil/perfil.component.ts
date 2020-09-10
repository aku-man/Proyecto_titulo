import { Component, OnInit, Input, OnChanges, Output} from '@angular/core';
import { Frases } from 'src/app/models/frases.model';
import {Pictograma} from 'src/app/models/pictograma.model';
import { Aux } from 'src/app/models/auxiliar.model';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  @Input() listaSeleccionada: Pictograma[];
  constructor() { }
  ngOnInit(): void {
  }

}
