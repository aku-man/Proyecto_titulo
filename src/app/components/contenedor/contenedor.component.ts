import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Pictograma } from 'src/app/models/pictograma.model';

@Component({
  selector: 'app-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.css']
})
export class ContenedorComponent implements OnInit, OnChanges {
  listaSelect: Pictograma[] = [];
  @Input() catSelected: number;
  @Input() pictoSelected: Pictograma = null;

  constructor() { }
  ngOnChanges(): void{
    if (this.pictoSelected != null){
      this.listaSelect.push(this.pictoSelected);
      this.pictoSelected = null;
    }
  }
  ngOnInit(): void {
    console.log(this.catSelected);
    console.log(this.pictoSelected);
  }

  eliminarPict(pict: Pictograma): void{
    const pos = this.listaSelect.indexOf(pict);
    this.listaSelect.splice(pos, 1);
  }
}
