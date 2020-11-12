import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  nombre: string = null;
  apellido: string = null;
  email: string = null;
  confEmail: string = null;
  pass: string = null;
  confirmPass: string = null;
  validar = false;
  user: Usuario = new Usuario();

  formulario: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private usuario: UsuariosService){
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nombre: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z]+$'),
          Validators.maxLength(30)
          // tslint:disable-next-line: max-line-length
          /* Validators.pattern(/^([0-9]{1,2}[0-9]{6}[0-9kK]{1}\s{0,})$|^[0-9]{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}\s{0,}$|^([0-9]{1,2}[0-9]{6}-[0-9kK]{1}\s{0,})$/) */
        ])
      ),
      apellido: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z]+$'),
          Validators.maxLength(30)
        ])
      ),
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])
      ),
      confirmEmail: new FormControl(
        '',
        Validators.compose([
          Validators.required
        ])
      ),
      pass: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])
      ),
      confirmPass: new FormControl(
        '',
        Validators.compose([
          Validators.required
        ])
      ),
    });
  }

  // Funcion que se activa al hacer click en "registrarse" y que hace las validaciones para crear el usuario
  // de forma correcta

  validarDatos(): void{
    /* this.validarEmail(this.email); */
    this.validar = true;
    if ((this.comprobarEmail(this.email, this.confEmail) === true) && (this.comprobarPass(this.pass, this.confirmPass) === true) ){
      this.validar = true;
    }
    else{
      this.validar = false;
    }
    /* this.comprobarEmail(this.email, this.confEmail);
    this.comprobarPass(this.pass, this.confirmPass); */
    /* this.largoContraseña(this.pass); */
    if (this.validar === true){
      this.user.nombre = this.nombre;
      this.user.apellido = this.apellido;
      this.user.contraseña = this.pass;
      this.user.email = this.email;
      this.usuario.onRegister(this.user);
      this.router.navigate(['/Login']);
      /* this.usuario.guardarUsuario(this.email, this.pass, this.nombre, this.apellido); */
    }
  }

  // funciones para validar los datos ingresadosal formulario

  /* validarEmail(valor): void {
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)){
     this.validar = true;
    } else {
     alert('La dirección de email es incorrecta.');
     this.validar = false;
    }
  } */

  comprobarEmail(valor1, valor2){
    if (valor1 !== valor2){
      // tslint:disable-next-line: max-line-length
      document.getElementById('alerta').innerHTML = '<div class= "alert alert-danger">Hay datos erroneos ingresados</div>';
      /* alert('Confirmar dirección email no es igual a la dirección email ingresada'); */
      /* this.validar = false; */
      return false;
    }
    else {
      /* this.validar = true; */
      document.getElementById('alerta').innerHTML = '';
      return true;
    }
  }

  comprobarPass(valor1, valor2){
    if (valor1 !== valor2){
      document.getElementById('alerta').innerHTML = '<div class= "alert alert-danger">Hay datos erroneos ingresados</div>';
      /* alert('Confirmar contraseña  no es igual a la contraseña ingresada'); */
      /* this.validar = false; */
      return false;
    }
    else {
      document.getElementById('alerta2').innerHTML = '';
      /* this.validar = true; */
      return true;
    }
  }

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
