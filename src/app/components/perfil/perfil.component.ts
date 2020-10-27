import { Component, OnInit, Input, OnChanges, Output} from '@angular/core';
import { DocumentReference } from '@angular/fire/firestore';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usprin } from '../../models/usprin.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  // nuevo usuario creado
  nuevoUsuario: Usprin = new Usprin();

  // datos para crear un nuevo usuario
  nombre: string = null;
  apellido: string = null;
  fecha: string = null;
  id: string = null;
  edad: string = null;

  // datos para cambiar la contraseña
  pass: string = null;
  confirmPass: string = null;
  validar = false;

  // datos para el uso del formulario de registro de nuevo usuario
  formulario: FormGroup;
  formularioUsuario: FormGroup;

  constructor(private formBuilder: FormBuilder, private usuario: UsuariosService) { }
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
      )
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
      ),
      edad: new FormControl(
        '',
        Validators.compose([
          Validators.required
        ])
      )
    });
  }

  async crearUsuario(): Promise<void>{
    console.log('usuario creado');
    await this.usuario.obtenerUser().then(user => {
      this.id = user.uid;
    });
    console.log(this.id);
    this.nuevoUsuario.nombre = this.nombre;
    this.nuevoUsuario.apellido = this.apellido;
    this.nuevoUsuario.fechaDeNacimiento = this.fecha;
    this.nuevoUsuario.idTutor = this.id;
    this.nuevoUsuario.edad = this.edad;
    console.log(this.nuevoUsuario);
    this.usuario.registrarUsuario(this.nuevoUsuario)
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
      this.usuario.cambiarPass(this.pass);
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
