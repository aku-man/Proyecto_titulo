import { Component, EventEmitter, OnInit, Output, SimpleChanges} from '@angular/core';
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

  // lista de usuarios por tutor
  usuarioList = [];

  // datos para crear un nuevo usuario
  nombre: string = null;
  apellido: string = null;
  fecha: string = null;
  id: string = null;
  formularioUsuario: FormGroup;

  // datos para cambiar la contraseña
  pass: string = null;
  confirmPass: string = null;
  validar = false;
  formulario: FormGroup;

  // datos para crear categoria
  nuevaCategoria: CategoriaUsuario = new CategoriaUsuario();
  nombreCategoria: string = null;
  formularioCategoria: FormGroup;

  // datos para crear pictograma
  nuevoPictograma: PictogramaUsuario = new PictogramaUsuario();
  nombrePictograma: string = null;
  nombreCat: string = null;
  formularioPictograma: FormGroup;

  // datos para editar categorias
  formularioEditarCategoria: FormGroup;
  nuevoNombreCategoria: string = null;
  usuarioEditarCategoria: any;
  imagenUrlEditarCategoria: any;

  // datos para editar pictograma
  formularioEditarPictograma: FormGroup;
  nuevoNombrePictograma: string = null;
  listaPictogramaEditar: any = [];
  usuarioEditarPictograma: any = null;
  usuarioEditarCatPictograma: any = null;
  imagenUrlEditarPictograma: any = null;


  formularioEliminarCategoria: FormGroup;


  // datos varios
  idEliminar: any;
  archivo: any;
  imagenUrl: any;
  imagenUrlPictograma: any;
  usuarioAgregarPictograma: any = null;
  usuarioEliminarCategoria: any = null;
  usuarioEliminarCatPictograma: any = null;
  usuarioEliminarPictograma: any = null;

  listaCategoria: any;
  listaPictograma: any = [];

  imagenCategoria: any;
  imagenEditarCategoria: any;
  seleccionarEditarCategoria: any;
  categoriaImagenPictograma: any;
  imagenPictograma: any;
  editarCatPictograma: any;
  editarPicto: any;
  imagenEditarPictograma: any;
  nombreEliminarCategoria: any;

  // datos para cargar preferencias del usuario
  idCargarPreferencias: any;
  validarIdCargarPreferencias: string = null;

  // Constructor
  constructor(private formBuilder: FormBuilder, private usuario: UsuariosService, private router: Router
            , private storage: PictogramasService
            , private imagenes: ImagenesService) { }


  // tslint:disable-next-line: typedef
  async ngOnInit() {
    this.usuario.obtenerUsuario();
    this.formulario = this.formBuilder.group({
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
      )
    });

    this.formularioCategoria = this.formBuilder.group({
      nombreCategoria: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(30)
        ])
      ),
      imagenCategoria: new FormControl(
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
          Validators.required,
          Validators.maxLength(30)
        ])
      ),
      categoriaImagenPictograma: new FormControl(
        '',
        Validators.compose([
          Validators.required
        ])
      ),
      imagenPictograma: new FormControl(
        '',
        Validators.compose([
          Validators.required
        ])
      )
    });

    this.formularioEditarCategoria = this.formBuilder.group({
      nuevoNombreCategoria: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(30)
        ])
      ),
      imagenEditarCategoria: new FormControl(
        '',
        Validators.compose([
          Validators.required
        ])
      ),
      seleccionarEditarCategoria: new FormControl(
        '',
        Validators.compose([
          Validators.required
        ])
      )
    });

    this.formularioEditarPictograma = this.formBuilder.group({
      nuevoNombrePictograma: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(30)
        ])
      ),
      editarCatPictograma: new FormControl(
        '',
        Validators.compose([
          Validators.required
        ])
      ),
      editarPicto: new FormControl(
        '',
        Validators.compose([
          Validators.required
        ])
      ),
      imagenEditarPictograma: new FormControl(
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
          Validators.required,
          Validators.pattern('^[a-zA-Z ]+$'),
          Validators.maxLength(30)
        ])
      ),
      apellido: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z ]+$'),
          Validators.maxLength(30)
        ])
      ),
      fecha: new FormControl(
        '',
        Validators.compose([
          Validators.required
        ])
      )
    });

    this.formularioEliminarCategoria = this.formBuilder.group({
      nombreEliminarCategoria: new FormControl(
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

  /* ----------------------------------- */
  // Funcion para crear usuario
  /* ----------------------------------- */

  async crearUsuario(): Promise<void>{
    const fecha = new Date(this.fecha);
    const hoy = new Date();

      // Discard the time and time-zone information.
    const utc1 = Date.UTC(fecha.getFullYear(), fecha.getMonth(), fecha.getDate());
    const utc2 = Date.UTC(hoy.getFullYear(), hoy.getMonth(), hoy.getDate());
    const edad = Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24 * 365));
    this.usuarioList = [];
    this.nuevoUsuario.nombre = this.nombre;
    this.nuevoUsuario.apellido = this.apellido;
    this.nuevoUsuario.fechaDeNacimiento = this.fecha;
    this.nuevoUsuario.idTutor = this.id;
    this.nuevoUsuario.edad = edad.toString();
    await this.usuario.registrarUsuario(this.nuevoUsuario);
  }

  /* ----------------------------------- */
  // Funcion para eliminar usuario
  /* ----------------------------------- */

  // tslint:disable-next-line: typedef
  async eliminarUsuario(){
    await this.usuario.borrar(this.idEliminar);
    this.imagenes.cargarUsuario(null, this.id);
  }

  /* ----------------------------------- */
  // Funciones para cambiar contraseña
  /* ----------------------------------- */

  validarDatos(): void{
    /* this.comprobarPass(this.pass, this.confirmPass); */
    /* this.largoContraseña(this.pass); */
      this.usuario.cambiarPass(this.pass);
  }

  /* comprobarPass(valor1, valor2): void {
      if (valor1 !== valor2){
        alert('Confirmar contraseña  no es igual a la contraseña ingresada');
        this.validar = false;
      }
      else {
        this.validar = true;
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

  eliminar(item): void{
    this.idEliminar = item;
  }

  /* ----------------------------------- */
  // Funciones para desloggearse
  /* ----------------------------------- */

  // tslint:disable-next-line: typedef
  async onLogOut(){
    const resul = await this.usuario.onOut();
    /* console.log('asdd', resul); */
    this.loggeado = await this.usuario.obtenerUsuario();
    if (resul !== undefined) {
      this.router.navigate(['/Tablero']);
    }
  }

  /* ------------------------------------------------------------- */
  // Funcion para obtener el archivo con los datos de la imagen
  /* ------------------------------------------------------------- */

  // tslint:disable-next-line: typedef
  seleccionarImagen(datosArchivo){
    this.archivo = datosArchivo;
  }


  /* ----------------------------------- */
  // Funciones para crear categorias
  /* ----------------------------------- */

  // tslint:disable-next-line: typedef
  async subirImagen(){
    this.imagenUrl = await this.storage.subirImagenStorage(this.archivo);
    if (this.imagenUrl !== null){
      this.crearCategoria();
      document.getElementById('alerta').innerHTML = '<div class= "alert alert-success">Se creó categoria correctamente</div>';
    }
  }

  // tslint:disable-next-line: typedef
  crearCategoria(){
    this.nuevaCategoria.nombre = this.nombreCategoria;
    this.nuevaCategoria.url = this.imagenUrl;
    this.storage.registrarCategoria(this.nuevaCategoria, this.idEliminar);
  }

  /* ----------------------------------- */
  // Funciones para crear pictogramas
  /* ----------------------------------- */

  // tslint:disable-next-line: typedef
  async subirImagenPictograma(){
    this.imagenUrlPictograma = await this.storage.subirImagenStoragePictograma(this.archivo);
    if (this.imagenUrlPictograma !== null){
      this.crearPictograma();
    }
  }

  // tslint:disable-next-line: typedef
  crearPictograma(){
    if (this.usuarioAgregarPictograma !== null){
      this.nuevoPictograma.nombre = this.nombrePictograma;
      this.nuevoPictograma.url = this.imagenUrlPictograma;
      this.nuevoPictograma.idCategoria = this.usuarioAgregarPictograma.idCategoria;
      this.storage.registrarPictogramaa(this.nuevoPictograma, this.idEliminar);
      document.getElementById('alerta').innerHTML = '<div class= "alert alert-success">Se creó pictograma correctamente</div>';
    }
    else{
      alert('debe seleccionar una categoria a la que agregar el pictograma');
    }
  }

  // tslint:disable-next-line: typedef
  idUtilizar(item){
    this.idEliminar = item;
    this.imagenes.obtenerCategoriasUsuario(this.idEliminar).subscribe((categoria) => {
      this.listaCategoria = categoria;
    });
    document.getElementById('alerta').innerHTML = '';
  }

  // tslint:disable-next-line: typedef
  seleccionarCategoria(user){
    console.log(user);
    this.usuarioAgregarPictograma = user;
  }


  /* ----------------------------------- */
  // Funciones para eliminar categoria
  /* ----------------------------------- */

  // tslint:disable-next-line: typedef
  seleccionarEliminarCategoria(user){
    this.usuarioEliminarCategoria = user;
    console.log(user);
  }

  // tslint:disable-next-line: typedef
  async eliminarCategoria(){
    if (this.usuarioEliminarCategoria !== null){
      await this.storage.eliminarCategoria(this.usuarioEliminarCategoria.idCategoria, this.idEliminar);
      document.getElementById('alerta').innerHTML = '<div class= "alert alert-success">Se eliminó categoria correctamente</div>'; 
    }
    else{
      alert('no se selecciono categoria a eliminar');
    }
  }



  /* ----------------------------------- */
  // Funciones para eliminar pictograma
  /* ----------------------------------- */

  // tslint:disable-next-line: typedef
  seleccionarEliminarCatPictograma(categoria){
    this.listaPictograma = [];
    if (categoria === null){
      this.usuarioEliminarPictograma = null;
    }
    console.log(categoria);
    this.usuarioEliminarCatPictograma = categoria;
    console.log(this.usuarioEliminarCatPictograma);
    this.imagenes.obtenerPictogramasUsuario(this.idEliminar).subscribe((pictograma) => {
      /* this.listaPictograma = pictograma; */
      this.listaPictograma = [];
      for ( const item of pictograma ){
        if (item.idCategoria === this.usuarioEliminarCatPictograma.idCategoria){
          this.listaPictograma.push(item);
        }
      }
      console.log(this.listaPictograma);
    });
  }

  // tslint:disable-next-line: typedef
  seleccionarEliminarPictograma(item){
    console.log(item);
    this.usuarioEliminarPictograma = item;

  }


  // tslint:disable-next-line: typedef
  async eliminarPictogrma(){
    console.log('entro');
    console.log(this.usuarioEliminarCatPictograma, this.usuarioEliminarPictograma);
    if (this.usuarioEliminarCatPictograma === null && this.usuarioEliminarPictograma === null){
      console.log('entro1');
      alert('No se elimino el pictograma ya que no se selecciono Categoria y Pictograma');
    }
    else if (this.usuarioEliminarPictograma === null){
      console.log('entro2');
      alert('no se selecciono Pictograma a eliminar');
    }
    else if (this.usuarioEliminarCatPictograma !== null && this.usuarioEliminarPictograma !== null){
      console.log('entro3');
      await this.storage.eliminarPictograma(this.usuarioEliminarPictograma.idPictograma, this.idEliminar);
      document.getElementById('alerta').innerHTML = '<div class= "alert alert-success">Se eliminó pictograma correctamente</div>';
    }
  }

  /* ----------------------------------- */
  // Funciones para cargar preferencias
  /* ----------------------------------- */

  // tslint:disable-next-line: typedef
  obtenerIdUsuario(user){
    this.idCargarPreferencias = user;
  }

  cargarPreferencias(validar): void{
    if (validar === true){
      this.validarIdCargarPreferencias = this.idCargarPreferencias;
      this.imagenes.cargarUsuario(this.validarIdCargarPreferencias, this.id);
      alert('Se cargó correctamente el usuario');
      /* document.getElementById('alerta').innerHTML = '<div class= "alert alert-success">Se cargo usuario correctamente</div>'; */
    }
    else {
      this.validarIdCargarPreferencias = null;
    }
  }


  /* ----------------------------------------- */
  // Funciones para actualizar una categoria
  /* ----------------------------------------- */

  seleccionarCategoriaEditar(user){
    console.log(user);
    this.usuarioEditarCategoria = user;
  }

  async subirImagenEditarCategoria(){
    console.log('datos imagen', this.archivo);
    this.imagenUrlEditarCategoria = await this.storage.subirImagenStorage(this.archivo);
    if (this.imagenUrlEditarCategoria !== null){
      document.getElementById('alerta').innerHTML = '<div class= "alert alert-success">Se editó categoria correctamente</div>'; 
      this.editarCategoria();
    }
  }

  editarCategoria(){
    if (this.usuarioEditarCategoria !== null){
      console.log(this.nuevoNombreCategoria);
      console.log(this.imagenUrlEditarCategoria);
      console.log(this.usuarioEditarCategoria.idCategoria);
      console.log(this.idEliminar);
      // tslint:disable-next-line: max-line-length
      this.storage.editarCategoria(this.nuevoNombreCategoria, this.imagenUrlEditarCategoria, this.usuarioEditarCategoria.idCategoria, this.idEliminar);
    }
    else{
      alert('debe seleccionar una categoria a la que agregar el pictograma');
    }
  }


  /* ----------------------------------------- */
  // Funciones para actualizar una pictograma
  /* ----------------------------------------- */

  // tslint:disable-next-line: typedef
  seleccionarEditarCatPictograma(categoria){
    this.listaPictogramaEditar = [];
    if (categoria === null){
      this.usuarioEditarPictograma = null;
    }
    this.usuarioEditarCatPictograma = categoria;
    this.imagenes.obtenerPictogramasUsuario(this.idEliminar).subscribe((pictograma) => {
      /* this.listaPictograma = pictograma; */
      this.listaPictogramaEditar = [];
      for ( const item of pictograma ){
        if (item.idCategoria === this.usuarioEditarCatPictograma.idCategoria){
          this.listaPictogramaEditar.push(item);
        }
      }
      console.log(this.listaPictogramaEditar);
    });
  }

  // tslint:disable-next-line: typedef
  seleccionarEditarPictograma(item){
    console.log(item);
    this.usuarioEditarPictograma = item;
  }

  // tslint:disable-next-line: typedef
  async subirImagenEditarPictograma(){
      console.log('datos imagen', this.archivo);
      this.imagenUrlEditarPictograma = await this.storage.subirImagenStorage(this.archivo);
      if (this.imagenUrlEditarPictograma !== null){
        console.log(this.imagenUrlEditarPictograma);
        this.editarPictograma();
      }
  }

  editarPictograma(){
    if (this.usuarioEditarCategoria !== null){
      console.log(this.nuevoNombrePictograma);
      console.log(this.imagenUrlEditarPictograma);
      console.log(this.usuarioEditarPictograma.idPictograma);
      console.log(this.idEliminar);
      // tslint:disable-next-line: max-line-length
      this.storage.editarPictograma(this.nuevoNombrePictograma, this.imagenUrlEditarPictograma, this.usuarioEditarPictograma.idPictograma, this.idEliminar);
      document.getElementById('alerta').innerHTML = '<div class= "alert alert-success">Se editó categoria correctamente</div>';
    }
    else{
      alert('debe seleccionar una categoria a la que agregar el pictograma');
    }
  }

}
