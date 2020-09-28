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
      this.updateDate(date);
    }, 1000);
    console.log(this.date.getDay());
    this.obtenerDia(this.date);
    this.day = this.daysArray[this.date.getDay()];
  }

  private updateDate(date: Date): void{
    const hours = date.getHours();
    this.ampm = hours >= 12 ? ' PM' : ' AM';
    this.hour = hours % 12;
    this.hour = this.hour ? this.hour : 12;
    this.hour = this.hour < 10 ? '0' + this.hour : this.hour;
    const minutes = date.getMinutes();
    this.minute = minutes < 10 ? '0' + minutes : minutes.toString();
    const seconds = date.getSeconds();
    this.second = seconds < 10 ? '0' + seconds : seconds.toString();
  }

  private obtenerDia(date: Date): void{
    const dia = this.daysArray[date.getDay()];
    let intro;
    console.log(dia);
    switch (dia){
      case 'Lunes' : {
        intro = document.getElementById('lunes');
        intro.style.backgroundColor = '#cddc39';
        break;
      }
      case 'Martes' : {
        intro = document.getElementById('martes');
        intro.style.backgroundColor = '#cddc39';
        break;
      }
      case 'Miercoles' : {
        intro = document.getElementById('miercoles');
        intro.style.backgroundColor = '#cddc39';
        break;
      }
      case 'Jueves' : {
        intro = document.getElementById('jueves');
        intro.style.backgroundColor = '#cddc39';
        break;
      }
      case 'Viernes' : {
        intro = document.getElementById('viernes');
        intro.style.backgroundColor = '#cddc39';
        break;
      }
      case 'Sabado' : {
        intro = document.getElementById('sabado');
        intro.style.backgroundColor = '#cddc39';
        break;
      }
      case 'Domingo' : {
        intro = document.getElementById('domingo');
        intro.style.backgroundColor = '#cddc39';
        break;
      }
    }
  }

}
