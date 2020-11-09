import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';
import { Draggable } from '@fullcalendar/interaction';
import interactionPlugin from '@fullcalendar/interaction';
declare var $: any;

import { CalendarOptions, DateSelectArg, EventClickArg, EventApi, CalendarApi } from '@fullcalendar/angular'; // useful for typechecking

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Pictograma } from 'src/app/models/pictograma.model';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private usuario: UsuariosService, private router: Router) { }
  loggeado: any;


  nombreEvento: string = null;
  nombrePicto: string = null;
  urlPicto: string = null;
  selectedInfo: DateSelectArg;
  formulario: FormGroup;

  calendarOptions: CalendarOptions = {
      initialView: 'timeGridWeek',
      events: [
        { title: 'Pictograma 1',
          start: '10:00',
          end: '12:00',
          extendedProps:{
            url: 'shasshas',
            nombre: 'ejemploPicto'
          }
          , daysOfWeek: [1],
        },
        { title: 'event 2', date: '2020-11-03', daysOfWeek: [1, 4], startTime: '10:00',
        endTime: '12:00', }
      ],
      select: this.handleDateSelect.bind(this),
      eventClick: this.handleEventClick.bind(this),
      eventsSet: this.handleEvents.bind(this),
      selectable: true,
      locale: 'esLocale',
      timeZone: 'local',
      firstDay: 1,
      droppable: true,
      editable: true,
      titleFormat: {
        month: 'long',
        year: 'numeric'
      },
      dayHeaderFormat: {
        weekday: 'long'
      },
      allDayText: 'Todo el dia',
    };

    currentEvents: EventApi[] = [];
    listaPicto: Pictograma[] = [{
      nombre: 'Cita previa',
      url: 'https://firebasestorage.googleapis.com/v0/b/tablero-de-comunicacion-2020.appspot.com/o/pictogramas%2Fcategoria3%2FCita%20previa.jpg?alt=media&token=a90cf234-abc7-411a-ab63-9c81a6b1710f'
    },
    {
      nombre: 'Medicación',
      url: 'https://firebasestorage.googleapis.com/v0/b/tablero-de-comunicacion-2020.appspot.com/o/pictogramas%2Fcategoria3%2FMedicacion.jpg?alt=media&token=1ef4bf83-2d57-4b4d-8eba-294ee72d4bf3'
    },{
      nombre: 'Ambulancia',
      url: 'https://firebasestorage.googleapis.com/v0/b/tablero-de-comunicacion-2020.appspot.com/o/pictogramas%2Fcategoria3%2FAmbulancia.jpg?alt=media&token=214117db-f6ac-4702-bb5c-72326e1c15e2'
    }];

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      nombreEvento: new FormControl(
        '',
        Validators.compose([
          Validators.required
        ])
      )});
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

  handleDateSelect(selectInfo: DateSelectArg): void {
    this.selectedInfo = selectInfo;
    selectInfo.view.calendar.unselect(); // clear date selection
    this.nombreEvento = null;
    this.nombrePicto = null;
    this.urlPicto = null;
    $('#modal').modal('show');
    // const title = this.nombreEvento;
    // if (title) {

    // }
  }

  setearDatos(): void{
    const calendarApi = this.selectedInfo.view.calendar;
    const start: string = this.selectedInfo.startStr;
    const end: string = this.selectedInfo.endStr;
    const title: string = this.nombreEvento;
    const Np: string = this.nombrePicto;
    const urlp: string = this.urlPicto;

    calendarApi.addEvent({
      title,
      start: start,
      end: end,
      durationEditable: true,
      extendedProps: {url: Np, nombre: urlp}
    });
  }

  handleEventClick(clickInfo: EventClickArg): void {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
  }

  exportarDia(): void{
    console.log(this.currentEvents);
  }

  seleccionarPicto(picto: Pictograma): void{
    this.nombrePicto = picto.nombre;
    this.urlPicto = picto.url;

    console.log(picto);
  }
}
