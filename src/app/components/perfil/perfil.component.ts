import { Component, OnInit, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import { DocumentReference } from '@angular/fire/firestore';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usprin } from '../../models/usprin.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  loggeado: any;

  // nuevo usuario creado
  nuevoUsuario: Usprin = new Usprin();
  tutor: any ;
  inicio = 1;

  // lista de usuarios por tutor
  usuarioList = [];

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

  constructor(private formBuilder: FormBuilder, private usuario: UsuariosService, private router: Router) { }
  async ngOnInit() {
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
    await this.usuario.obtenerUser().then(user => {
      this.id = user.uid;
    });
    this.getTutor(this.id);
    console.log('oninit');
  }

  async ngOnChanges(changes: SimpleChanges){
    await this.usuario.obtenerUser().then(user => {
      this.id = user.uid;
    });
    this.getTutor(this.id);
  }

  async crearUsuario(): Promise<void>{
    console.log('usuario creado');
    this.inicio = 2;
    await this.usuario.obtenerUser().then(user => {
      this.id = user.uid;
    });
    /* this.getTutor(this.id); */
    /* console.log(this.id); */
    this.nuevoUsuario.nombre = this.nombre;
    this.nuevoUsuario.apellido = this.apellido;
    this.nuevoUsuario.fechaDeNacimiento = this.fecha;
    this.nuevoUsuario.idTutor = this.id;
    this.nuevoUsuario.edad = this.edad;
    this.usuario.registrarUsuario(this.nuevoUsuario);
  }

  /* async obtenerInfoHijos(userId :string){
    for ( let index = this.contador; index < this.user.arrayIdChildren.length; index++) {
     this.contador++;
     this.hijosService.obtenerInfoHijo(this.user.arrayIdChildren[index], userId).subscribe((data:Child)=>{
      this.arregloHijos.push(data);

    });
    }
  } */

  // tslint:disable-next-line: typedef
 async buscarUsuarios(){
    console.log(this.tutor);
    /* this.usuarioList = []; */
    if (this.inicio === 1){
      for (let i of this.tutor.arregloUsuarios){
        console.log(i);
        (await this.usuario.usuariosPorId(i)).subscribe((user) => {
          this.usuarioList.push(user);
        });
      }
      this.inicio = 3;
    }
    else if(this.inicio === 2){
      this.inicio = 3;
      (await this.usuario.usuariosPorId(this.tutor.arregloUsuarios[this.tutor.arregloUsuarios.length - 1 ])).subscribe((user) => {
        this.usuarioList.push(user);
      });
    }
    console.log(this.usuarioList);
  }

  // tslint:disable-next-line: typedef
  async getTutor(id: string) {
    console.log('entro');
    (await this.usuario.getInformationProfile(id)).subscribe((user) => {
      this.tutor = user;
      if (this.tutor.arregloUsuarios != null){
        this.buscarUsuarios();
      }
    });
  }

  eliminarUsuario(): void{
    /* this.usuario.deleteUsuario(this.idEliminar, this.tutor.id); */
  }

  cargarPreferencias(): void{
    /* console.log('Preferencias cargadas'); */
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
        /* console.log('contraseña ingresada posee el largo permitido'); */
        this.validar = true;
      }
    }
  }

  eliminar(id): void{
    /* this.idEliminar = id;
    console.log(id); */
  }

  async onLogOut(){
    const resul = await this.usuario.onOut();
    /* console.log('asdd', resul); */
    this.loggeado = await this.usuario.obtenerUsuario();
    if (resul !== undefined) {
      this.router.navigate(['/Tablero']);
    }
  }
}
