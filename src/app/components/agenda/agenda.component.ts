import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';
import { Draggable } from '@fullcalendar/interaction';
import interactionPlugin from '@fullcalendar/interaction';

import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/angular'; // useful for typechecking

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  constructor(private usuario: UsuariosService, private router: Router) { }
  loggeado: any;

  calendarOptions: CalendarOptions = {
      initialView: 'timeGridWeek',
      events: [
        { title: 'Pictograma 1', date: '2020-10-29', extendedProps: {
          pictoUrl: 'https://firebasestorage.googleapis.com/v0/b/tablero-de-comunicacion-2020.appspot.com/o/pictogramas%2Fcategoria3%2FCita%20previa.jpg?alt=media&token=a90cf234-abc7-411a-ab63-9c81a6b1710f',
        }},
        { title: 'event 2', date: '2020-10-29' }
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


  ngOnInit(): void {
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
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
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
}
