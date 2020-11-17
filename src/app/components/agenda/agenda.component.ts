import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';
import { Draggable } from '@fullcalendar/interaction';
import interactionPlugin from '@fullcalendar/interaction';

import { ListaPictograma } from '../../listaPictograma';
declare var $: any;

import { CalendarOptions, DateSelectArg, EventClickArg, EventApi} from '@fullcalendar/angular'; // useful for typechecking

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Pictograma } from 'src/app/models/pictograma.model';
import { ImagenesService } from 'src/app/services/imagenes.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private usuario: UsuariosService, private router: Router,
              private imagenes: ImagenesService) { }
  loggeado: any;

  userId: any = null;
  nombreEvento: string = null;
  nombrePicto: string = null;
  urlPicto: string = null;
  selectedInfo: DateSelectArg;
  formulario: FormGroup;
  listaEventos: any = [];

  flag: any;

  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
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
  listaPicto = ListaPictograma;

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
    /* this.userId = this.usuario.usuarioFrase.usuarioCargado; */
    await this.usuario.obtenerEvento().subscribe((evento) => {
      this.flag = evento;
      while (this.listaEventos.length > 0){
        this.listaEventos.pop();
      }
      for (const item of this.flag){
        const nuevoEvento = {
          title: '',
          startTime: '',
          endTime: '',
          durationEditable: false,
          extendedProps: {url: '', nombre: '', id: ''},
          daysOfWeek: []
        };
        nuevoEvento.title = item.title;
        nuevoEvento.startTime = item.start;
        nuevoEvento.endTime = item.end;
        nuevoEvento.extendedProps = {
          url: item.urlPicto,
          nombre: item.nombrePicto,
          id: item.idEvento
        };
        nuevoEvento.daysOfWeek = [item.day];
        this.listaEventos.push(nuevoEvento);
      }
      this.calendarOptions.events = this.listaEventos;
    });
    await this.imagenes.obtenerPictogramas(this.usuario.usuarioFrase.usuarioCargado).subscribe((pictograma) => {
      console.log(pictograma);
      for (const item of pictograma ){
        this.listaPicto.push(item);
        }
    });
    this.formulario = this.formBuilder.group({
      nombreEvento: new FormControl(
        '',
        Validators.compose([
          Validators.required
        ])
      ),
      nombrePicto: new FormControl(
        '',
        Validators.compose([
          Validators.required
        ])
      )
    });
  }


  // tslint:disable-next-line: typedef
  async onLogOut(){
    const resul = await this.usuario.onOut();
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
  }

  async setearDatos(): Promise<void>{
    const calendarApi = this.selectedInfo.view.calendar;
    const start: string = this.selectedInfo.start.toTimeString();
    const end: string = this.selectedInfo.end.toTimeString();
    const day: number = this.selectedInfo.start.getDay();
    const title: string = this.nombreEvento;
    const Np: string = this.nombrePicto;
    const urlp: string = this.urlPicto;
    console.log(calendarApi.addEvent({
      title,
      startTime: start,
      endTime: end,
      durationEditable: false,
      extendedProps: {url: Np, nombre: urlp},
      daysOfWeek: [day]
    })._def);
    await this.usuario.agregarEvento(start, end, day, title, Np, urlp);
  }

  handleEventClick(clickInfo: EventClickArg): void {
    if (confirm(`¿Esta seguro de eliminar este evento? '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
      this.usuario.eliminarEvento( clickInfo.event.extendedProps.id, this.userId);
    }
  }

  // tslint:disable-next-line: typedef
  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
  }

  exportarDia(): void{
    // console.log(this.currentEvents);
  }

  seleccionarPicto(picto: Pictograma): void{
    this.nombrePicto = picto.nombre;
    this.urlPicto = picto.url;
    // console.log(picto);
  }

  cargarEventos(): void {
    for (const evento of this.listaEventos){
      $('#calendar').fullcalendar('addEvent', evento);
    }
  }
}
