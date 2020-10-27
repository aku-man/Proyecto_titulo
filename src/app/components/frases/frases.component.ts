import { Component, OnInit, Input } from '@angular/core';
import { Frase } from '../../models/frase.model';

@Component({
  selector: 'app-frases',
  templateUrl: './frases.component.html',
  styleUrls: ['./frases.component.css']
})
export class FrasesComponent implements OnInit {
  constructor() { }

  listaFrase: Frase[] = [{
    frecuencia : 3,
    listaPicto : [{
      nombre: 'Cita previa',
      url: 'https://firebasestorage.googleapis.com/v0/b/tablero-de-comunicacion-2020.appspot.com/o/pictogramas%2Fcategoria3%2FCita%20previa.jpg?alt=media&token=a90cf234-abc7-411a-ab63-9c81a6b1710f'
    },
    {
      nombre: 'Medicación',
      url: 'https://firebasestorage.googleapis.com/v0/b/tablero-de-comunicacion-2020.appspot.com/o/pictogramas%2Fcategoria3%2FMedicacion.jpg?alt=media&token=1ef4bf83-2d57-4b4d-8eba-294ee72d4bf3'
    }]
  },
  {
    frecuencia: 1,
    listaPicto: [{
      nombre: 'Ambulancia',
      url: 'https://firebasestorage.googleapis.com/v0/b/tablero-de-comunicacion-2020.appspot.com/o/pictogramas%2Fcategoria3%2FAmbulancia.jpg?alt=media&token=214117db-f6ac-4702-bb5c-72326e1c15e2'
    }]
  }];
  ngOnInit(): void {
  }
}
