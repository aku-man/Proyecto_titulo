import { Component, OnInit, SimpleChanges} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usprin } from '../../models/usprin.model';
import { PictogramaUsuario } from '../../models/pictogramaUsuario.model';
import { CategoriaUsuario } from '../../models/CategoriaUsuario.model';
import { Router } from '@angular/router';

import { PictogramasService } from '../../services/pictogramas.service';
import { ImagenesService } from 'src/app/services/imagenes.service';

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
  usuarioTutor: any;
  nuevaCategoria: CategoriaUsuario = new CategoriaUsuario();
  nuevoPictograma: PictogramaUsuario = new PictogramaUsuario();

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

  // datos para crear categoria
  nombreCategoria: string = null;

  // datos para crear pictograma
  nombrePictograma: string = null;
  nombreCat: string = null;

  // datos para el uso del formulario de registro de nuevo usuario
  formulario: FormGroup;
  formularioUsuario: FormGroup;
  formularioCategoria: FormGroup;
  formularioPictograma: FormGroup;

  idEliminar: any;
  archivo: any;
  imagenUrl: any;
  imagenUrlPictograma: any;
  usuarioAgregarPictograma: any;

  listaCategoria: any;

  constructor(private formBuilder: FormBuilder, private usuario: UsuariosService, private router: Router
            , private storage: PictogramasService
            , private imagenes: ImagenesService) { }


  // tslint:disable-next-line: typedef
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

    this.formularioCategoria = this.formBuilder.group({
      nombreCategoria: new FormControl(
        '',
        Validators.compose([
          Validators.required
        ])
      )
    });

    this.formularioPictograma = this.formBuilder.group({
      nombrePictograma: new FormControl(
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
    await this.conseguirId();
    (await this.usuario.getInformationProfile(this.id)).subscribe(async usuariosCompletos => {
      this.usuarioTutor = await usuariosCompletos;
    });
    (await this.usuario.usuariosPorId()).subscribe(async usuariosCompletos => {
      this.usuarioList = [];
      for (const u of usuariosCompletos){
       if (this.id !== null && this.id === u.idTutor){
        await this.usuarioList.push(u);
       }
      }
    });
  }

  // tslint:disable-next-line: typedef
  async conseguirId(){
    await this.usuario.obtenerUser().then(async user => {
        (await this.usuario.getInformationProfile(user.uid)).subscribe(async usuariosCompletos => {
          this.tutor = await usuariosCompletos;
        });
        this.id = user.uid;
    });
  }

  async crearUsuario(): Promise<void>{
    console.log('usuario creado');
    this.usuarioList = [];
    this.nuevoUsuario.nombre = this.nombre;
    this.nuevoUsuario.apellido = this.apellido;
    this.nuevoUsuario.fechaDeNacimiento = this.fecha;
    this.nuevoUsuario.idTutor = this.id;
    this.nuevoUsuario.edad = this.edad;
    await this.usuario.registrarUsuario(this.nuevoUsuario);
  }

  // tslint:disable-next-line: typedef
  async eliminarUsuario(){
    await this.usuario.borrar(this.idEliminar);
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

  eliminar(item): void{
    this.idEliminar = item;
  }

/*   async getTutor() {
    this.tutor = await this.usuario.getInformationProfile(this.id);
  } */

  // tslint:disable-next-line: typedef
  async onLogOut(){
    const resul = await this.usuario.onOut();
    /* console.log('asdd', resul); */
    this.loggeado = await this.usuario.obtenerUsuario();
    if (resul !== undefined) {
      this.router.navigate(['/Tablero']);
    }
  }

  // tslint:disable-next-line: typedef
  seleccionarImagen(datosArchivo){
    this.archivo = datosArchivo;
  }

  // tslint:disable-next-line: typedef
  async subirImagen(){
    console.log('datos imagen', this.archivo);
    this.imagenUrl = await this.storage.subirImagenStorage(this.archivo);
    if(this.imagenUrl !== null){
      this.crearCategoria();
    }
  }

  crearCategoria(){
    this.nuevaCategoria.nombre = this.nombreCategoria;
    this.nuevaCategoria.url = this.imagenUrl;
    this.storage.registrarCategoria(this.nuevaCategoria, this.idEliminar);
  }

  async subirImagenPictograma(){
    console.log('datos imagen', this.archivo);
    this.imagenUrlPictograma = await this.storage.subirImagenStoragePictograma(this.archivo);
    if(this.imagenUrlPictograma !== null){
      console.log(this.imagenUrlPictograma);
      this.crearPictograma();
    }
  }

  crearPictograma(){
    this.nuevoPictograma.nombre = this.nombrePictograma;
    this.nuevoPictograma.url = this.imagenUrlPictograma;
    this.nuevoPictograma.idCategoria = this.usuarioAgregarPictograma.idCategoria;
    this.storage.registrarPictogramaa(this.nuevoPictograma, this.idEliminar);
  }

  idUtilizar(item){
    this.idEliminar = item;
    this.imagenes.obtenerCategoriasUsuario(this.idEliminar).subscribe((categoria) => {
      this.listaCategoria = categoria;
      console.log(this.listaCategoria);
      for (let items of this.listaCategoria ){
        console.log(items.nombre);
      }
    });
  }

  seleccionarCategoria(user){
    console.log(user);
    this.usuarioAgregarPictograma = user;
  }
}
