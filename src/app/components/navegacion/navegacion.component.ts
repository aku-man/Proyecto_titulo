import { trigger } from '@angular/animations';
import { Component, Input, Output, EventEmitter, Renderer2, OnInit } from '@angular/core';
import {} from '@angular/material/menu';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {
  user: Usuario = new Usuario();
  loggeado: false;
  constructor(private usuario: UsuariosService){}

  ngOnInit(): void {
    this.loggeado = this.usuario.verificarSesion();
    console.log(this.loggeado);
    console.log(this.usuario.verificarSesion());
  }


  cerrarSesion(): void{
    this.usuario.desloggearse();
  }
}


