import { Component, OnInit } from '@angular/core';
import { analytics } from 'firebase';

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
  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      const date = new Date();
    }, 1000);
    console.log(this.date.getDay());
    this.obtenerDia(this.date);
    this.day = this.daysArray[this.date.getDay()];
  }

  private obtenerDia(date: Date): void{
    const dia = this.daysArray[date.getDay()];
    let intro;
    console.log(dia);
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

}
