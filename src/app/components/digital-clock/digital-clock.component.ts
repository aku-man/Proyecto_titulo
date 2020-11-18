import { Component, OnInit } from '@angular/core';

import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/angular'; // useful for typechecking
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Pictograma } from '../../models/pictograma.model';
@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.css']
})
export class DigitalClockComponent implements OnInit {
  private daysArray = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
  private date = new Date();
  public hour: any;
  public minute: string;
  public second: string;
  public ampm: string;
  public day: string;
  constructor(private usuario: UsuariosService) { }
  listaAgenda: any[];
  currentEvents: EventApi[] = [];

  ngOnInit(){
    this.obtenerFrases();

    setInterval(() => {
      const date = new Date();
    }, 1000);
    this.obtenerDia(this.date);
    this.day = this.daysArray[this.date.getDay()];
  }

  private obtenerDia(date: Date): void{
    const dia = this.daysArray[date.getDay()];
    let intro;
    switch (dia){
      case 'Lunes' : {
        intro = document.getElementById('lunes');
        intro.style.backgroundColor = '#7e57c2';
        intro.style.color = 'white';
        if ((this.usuario.tutor.uid === null) || (this.usuario.tutor.uid === undefined)){
          console.log('algo');
          document.getElementById('lunes').innerHTML = '<div id="lunes" data-target="#nologeado" data-toggle="modal">X</div>';
        }
        else {
          document.getElementById('lunes').innerHTML = '<div id="lunes" data-target="#modal1" data-toggle="modal">X</div>';
        }
        break;
      }
      case 'Martes' : {
        intro = document.getElementById('martes');
        intro.style.backgroundColor = '#7e57c2';
        intro.style.color = 'white';
        if ((this.usuario.tutor.uid === null) || (this.usuario.tutor.uid === undefined)){
          console.log('algo');
          document.getElementById('martes').innerHTML = '<div id="martes" data-target="#nologeado" data-toggle="modal">X</div>';
        }
        else {
          document.getElementById('martes').innerHTML = '<div id="martes" data-target="#modal2" data-toggle="modal">X</div>';
        }
        break;
      }
      case 'Miercoles' : {
        intro = document.getElementById('miercoles');
        intro.style.backgroundColor = '#7e57c2';
        intro.style.color = 'white';
        if ((this.usuario.tutor.uid === null) || (this.usuario.tutor.uid === undefined)){
          console.log('algo');
          document.getElementById('miercoles').innerHTML = '<div id="miercoles" data-target="#nologeado" data-toggle="modal">X</div>';
        }
        else {
          document.getElementById('miercoles').innerHTML = '<div id="miercoles" data-target="#modal3" data-toggle="modal">X</div>';
        }
        break;
      }
      case 'Jueves' : {
        intro = document.getElementById('jueves');
        intro.style.backgroundColor = '#7e57c2';
        intro.style.color = 'white';
        if ((this.usuario.tutor.uid === null) || (this.usuario.tutor.uid === undefined)){
          console.log('algo');
          document.getElementById('jueves').innerHTML = '<div id="jueves" data-target="#nologeado" data-toggle="modal">X</div>';
        }
        else {
          document.getElementById('jueves').innerHTML = '<div id="jueves" data-target="#modal4" data-toggle="modal">X</div>';
        }
        break;
      }
      case 'Viernes' : {
        intro = document.getElementById('viernes');
        intro.style.backgroundColor = '#7e57c2';
        intro.style.color = 'white';
        if ((this.usuario.tutor.uid === null) || (this.usuario.tutor.uid === undefined)){
          console.log('algo');
          document.getElementById('viernes').innerHTML = '<div id="viernes" data-target="#nologeado" data-toggle="modal">X</div>';
        }
        else {
          document.getElementById('viernes').innerHTML = '<div id="viernes" data-target="#modal5" data-toggle="modal">X</div>';
        }
        break;
      }
      case 'Sabado' : {
        intro = document.getElementById('sabado');
        intro.style.backgroundColor = '#7e57c2';
        intro.style.color = 'white';
        if ((this.usuario.tutor.uid === null) || (this.usuario.tutor.uid === undefined)){
          console.log('algo');
          document.getElementById('sabado').innerHTML = '<div id="sabado" data-target="#nologeado" data-toggle="modal">X</div>';
        }
        else {
          document.getElementById('sabado').innerHTML = '<div id="sabado" data-target="#modal6" data-toggle="modal">X</div>';
        }
        break;
      }
      case 'Domingo' : {
        intro = document.getElementById('domingo');
        intro.style.backgroundColor = '#7e57c2';
        intro.style.color = 'white';
        if ((this.usuario.tutor.uid === null) || (this.usuario.tutor.uid === undefined)){
          console.log('algo');
          document.getElementById('domingo').innerHTML = '<div id="domingo" data-target="#nologeado" data-toggle="modal">X</div>';
        }
        else {
          document.getElementById('domingo').innerHTML = '<div id="domingo" data-target="#modal7" data-toggle="modal">X</div>';
        }
        break;
      }
    }
  }

  async obtenerFrases(){
    await this.usuario.obtenerEvento().subscribe((evento) => {
      this.listaAgenda = evento;
      console.log(this.listaAgenda);
      this.listaAgenda.sort((a, b) => {
        const fecha1 = a.start[0] + a.start[1] + a.start[3] + a.start[4];
        const fecha2 = b.start[0] + b.start[1] + b.start[3] + b.start[4];

        if (fecha1 > fecha2){
          return 1;
        }
        else if (fecha1 < fecha2){
          return -1;
        }
        return 0;
      });
    });
  }

}
