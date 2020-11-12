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
  listaAgenda: any;
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

        break;
      }
      case 'Martes' : {
        intro = document.getElementById('martes');
        intro.style.backgroundColor = '#7e57c2';
        intro.style.color = 'white';
        break;
      }
      case 'Miercoles' : {
        intro = document.getElementById('miercoles');
        intro.style.backgroundColor = '#7e57c2';
        intro.style.color = 'white';
        break;
      }
      case 'Jueves' : {
        intro = document.getElementById('jueves');
        intro.style.backgroundColor = '#7e57c2';
        intro.style.color = 'white';
        break;
      }
      case 'Viernes' : {
        intro = document.getElementById('viernes');
        intro.style.backgroundColor = '#7e57c2';
        intro.style.color = 'white';
        break;
      }
      case 'Sabado' : {
        intro = document.getElementById('sabado');
        intro.style.backgroundColor = '#7e57c2';
        intro.style.color = 'white';
        break;
      }
      case 'Domingo' : {
        intro = document.getElementById('domingo');
        intro.style.backgroundColor = '#7e57c2';
        intro.style.color = 'white';
        break;
      }
    }
  }

  async obtenerFrases(){
    await this.usuario.obtenerEvento().subscribe((evento) => {
      console.log(evento);
      this.listaAgenda = evento;
    });
  }

}
