import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthProvider } from 'ngx-auth-firebaseui';

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
        Validators.required
      ])
    ),
    password: new FormControl(
      '',
      Validators.compose([
        Validators.required
      ])
    )
    });
  }

  onResetPasswordRequested(): void {
  /*   const _dialogGrafico = this.dialog.open(ForgotPasswordComponent, {
      width: '25vw',
      height : '35vh',
      data: {
      }
    }); */
  }

  // Funcion cuando se clickea "iniciar sesion" y que permite validar y obtener los datos de la base de datos

  loggearse(): void{
    this.validarEmail(this.email);
    this.largoContraseña(this.password);
    const self = this;
    if (this.validar === true){
      this.usuario.login(this.email, this.password).then(
        async (value) => {
          self.router.navigate(['/Tablero']);
          this.usuario.emitNavChangeEvent(1);
      },
      async  (error) => {
        if (error.code === 'auth/wrong-password') {
          alert('El email o contraseña ingresados son incorrectos');
        }
        if (error.code === 'auth/user-not-found') {
          alert('El email o contraseña ingresados son incorrectos');
        }
      });
    }
  }

  // Funciones para verificar los datos de inicio de sesion

  validarEmail(valor): void {
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)){
     /* console.log('aprobado'); */
     this.validar = true;
    } else {
     alert('La dirección de email es incorrecta.');
     this.validar = false;
    }
  }

  largoContraseña(valor): void{
    if (this.validar === true){
      if ( valor.length < 6){
        alert('La contraseña debe poseer mas de 6 caracteres');
        this.validar = false;
      }
      else {
        /* console.log('contraseña ingresada posee el largo permitido'); */
        this.validar = true;
      }
    }
  }
}
