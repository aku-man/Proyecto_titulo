import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;
  email: string;
  password: string;
  validar: boolean;
  constructor(private router: Router, private formBuilder: FormBuilder, private usuario: UsuariosService) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
    email: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])
    ),
    password: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])
    )
    });
  }

  onResetPasswordRequested(): void {
  }

  // Funcion cuando se clickea "iniciar sesion" y que permite validar y obtener los datos de la base de datos

  loggearse(): void{
    /* this.validarEmail(this.email); */
    this.validar = true;
    /* this.largoContraseña(this.password); */
    const self = this;
    if (this.validar === true){
      this.usuario.login(this.email, this.password).then(
        async (value) => {
          this.usuario.obtenerUsuario();
          console.log(value);
          self.router.navigate(['/Tablero']);
          this.usuario.emitNavChangeEvent(1);
      },
      async  (error) => {
        if (error.code === 'auth/wrong-password') {
          document.getElementById('alerta').innerHTML = '<div class= "alert alert-danger">Hay datos erroneos ingresados</div>';
        }
        if (error.code === 'auth/user-not-found') {
          document.getElementById('alerta').innerHTML = '<div class= "alert alert-danger">Hay datos erroneos ingresados</div>';
        }
      });
    }
  }

  // Funciones para verificar los datos de inicio de sesion

  /* validarEmail(valor): void {
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)){
     this.validar = true;
    } else {
     alert('La dirección de email es incorrecta.');
     this.validar = false;
    }
  } */

  /* largoContraseña(valor): void{
    if (this.validar === true){
      if ( valor.length < 6){
        alert('La contraseña debe poseer mas de 6 caracteres');
        this.validar = false;
      }
      else {
        this.validar = true;
      }
    }
  } */
}
