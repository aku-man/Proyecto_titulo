import { Component, OnInit, Input } from '@angular/core';
import {Pictograma} from 'src/app/models/pictograma.model';

@Component({
  selector: 'app-frases',
  templateUrl: './frases.component.html',
  styleUrls: ['./frases.component.css']
})
export class FrasesComponent implements OnInit {
  @Input() listaSeleccionada: Pictograma[];
  constructor() { }
  ngOnInit(): void {
  }

}
