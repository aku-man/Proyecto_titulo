import { Component, OnInit, Input } from '@angular/core';
import { Frase } from '../../models/frase.model';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frases',
  templateUrl: './frases.component.html',
  styleUrls: ['./frases.component.css']
})
export class FrasesComponent implements OnInit {
  constructor(private usuario: UsuariosService, private router: Router) { }
  loggeado: any;
  listaFrase: Frase[] = [];
  flag: any;
  datosCargados = false;
  userId: any = null;

  async ngOnInit(): Promise<void> {
    await this.usuario.obtenerUsuario();
    this.userId = this.usuario.usuarioFrase.usuarioCargado;
    if (this.userId === null){
      console.log('algo');
      document.getElementById('alerta').innerHTML = '<div><h1>Debe cargar datos del usuario</h1></div>';
    }
    else{
      console.log('nada');
      document.getElementById('alerta').innerHTML = '';
    }
    await this.usuario.obtenerFrases().subscribe((frases) => {
      this.flag = frases;
      while (this.listaFrase.length > 0){
        this.listaFrase.pop();
      }
      for (const item of this.flag){
        const nuevaFrase: Frase = {
          listaPicto : [],
          frecuencia : 1,
          idFrase : ''
        };
        nuevaFrase.frecuencia = item.frecuencia;
        nuevaFrase.listaPicto = item.listaFrase;
        nuevaFrase.idFrase = item.idFrase;
        // console.log(nuevaFrase);
        this.listaFrase.push(nuevaFrase);
        /* this.listaFrase.push(this.frase);
        this.listaprueba.push(item); */
      }
      this.listaFrase = this.listaFrase.sort((fraseA: Frase, fraseB: Frase) => {
        return fraseB.frecuencia - fraseA.frecuencia;
      });
      this.datosCargados = true;
    });

  }

  // tslint:disable-next-line: typedef
  async onLogOut(){
    const resul = await this.usuario.onOut();
    /* console.log('asdd', resul); */
    this.loggeado = await this.usuario.obtenerUsuario();
    if (resul !== undefined) {
      this.router.navigate(['/Tablero']);
    }
  }
}



