import { Component, OnInit,  } from '@angular/core';
import { Pictograma } from 'src/app/models/pictograma.model';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {
  catSelectedAux: string;
  pictSelected: number;
  listaSelected: Pictograma[];

  idCargarPreferencias: string;

  constructor(private usuario: UsuariosService) {
  }

  ngOnInit(): void {
    if (this.usuario.inicio === 0){
      this.usuario.inicio = 1;
      this.usuario.onOut();
    }
  }

  receiveMessage($event): void{
    this.catSelectedAux = $event;
  }

  recivirMensajePicto($event): void{
    this.pictSelected = $event;
  }

  recivirMensajeListaPicto($event): void{
    this.listaSelected = $event;
  }
}






