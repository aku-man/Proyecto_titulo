import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';

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

  formulario: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private usuario: UsuariosService){
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nombre: new FormControl(
        '',
        Validators.compose([
          Validators.required
// tslint:disable-next-line: max-line-length
/* Validators.pattern(/^([0-9]{1,2}[0-9]{6}[0-9kK]{1}\s{0,})$|^[0-9]{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}\s{0,}$|^([0-9]{1,2}[0-9]{6}-[0-9kK]{1}\s{0,})$/) */
        ])
      ),
      apellido: new FormControl(
        '',
        Validators.compose([
          Validators.required
        ])
      ),
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required
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
          Validators.required
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

  validarDatos(): void{
    this.validarEmail(this.email);
    this.comprobarEmail(this.email, this.confEmail);
    this.comprobarPass(this.pass, this.confirmPass);
    if (this.validar === true){
      this.router.navigate(['/Login']);
      this.usuario.guardarUsuario(this.email, this.pass, this.nombre, this.apellido);
    }
  }

  validarEmail(valor): void {
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)){
     console.log('aprobado');
     this.validar = true;
    } else {
     alert('La dirección de email es incorrecta.');
     this.validar = false;
    }
  }

  comprobarEmail(valor1, valor2): void {
    if (this.validar === true){
      if (valor1 !== valor2){
        alert('Confirmar dirección email no es igual a la dirección email ingresada');
        this.validar = false;
      }
      else {
        this.validar = true;
      }
    }
  }

  comprobarPass(valor1, valor2): void {
    if (this.validar === true){
      if (valor1 !== valor2){
        alert('Confirmar contraseña  no es igual a la contraseña ingresada');
        this.validar = false;
      }
      else {
        this.validar = true;
      }
    }
  }
}
