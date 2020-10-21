import { Component, OnInit, Input, OnChanges, Output} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  nombre: string = null;
  apellido: string = null;
  fecha: string = null;
  pass: string = null;
  confirmPass: string = null;
  isCollapsed = true;
  validar = false;
  formulario: FormGroup;
  formularioUsuario: FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
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

    this.formularioUsuario = this.formBuilder.group({
      nombre: new FormControl(
        '',
        Validators.compose([
          Validators.required
        ])
      ),
      apellido: new FormControl(
        '',
        Validators.compose([
          Validators.required
        ])
      ),
      fecha: new FormControl(
        '',
        Validators.compose([
          Validators.required
        ])
      )
    });
  }

  crearUsuario(): void{
    console.log('usuario creado');
  }

  eliminarUsuario(): void{
    console.log('Usuario eliminado');
  }

  cargarPreferencias(): void{
    console.log('Preferencias cargadas');
  }

  validarDatos(): void{
    this.comprobarPass(this.pass, this.confirmPass);
    this.largoContraseña(this.pass);
    if (this.validar === true){
      console.log('buena contraseña oe');
      /* this.usuario.guardarUsuario(this.email, this.pass, this.nombre, this.apellido); */
    }
  }

  comprobarPass(valor1, valor2): void {
      if (valor1 !== valor2){
        alert('Confirmar contraseña  no es igual a la contraseña ingresada');
        this.validar = false;
      }
      else {
        this.validar = true;
      }
  }

  largoContraseña(valor): void{
    if (this.validar === true){
      if ( valor.length < 6){
        alert('La contraseña debe poseer mas de 6 caracteres');
        this.validar = false;
      }
      else {
        console.log('contraseña ingresada posee el largo permitido');
        this.validar = true;
      }
    }
  }
}
