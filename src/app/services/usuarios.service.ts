import { Injectable, EventEmitter, Output } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference} from '@angular/fire/firestore';
import { Usuario } from '../models/usuario.model';
import * as firebase from 'firebase';
import { Usprin } from '../models/usprin.model';
import { firestore } from 'firebase';

import { map } from 'rxjs/operators';

// tslint:disable-next-line: no-empty-interface
export interface Item {}

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  navchange: EventEmitter<number> = new EventEmitter();
  user$: Observable<any>;

  nuevoUsuario = {
    id: '',
    nombre: '',
    apellido: '',
    correo: '',
    contraseña: ''
  };

  nuevoId: string = null;
  largo = new EventEmitter< number >();
  tutor: any;
  usuarioFrase: any;
  borrado = false;

  private frasesCollection: AngularFirestoreCollection<Item>;
  private eventosCollection: AngularFirestoreCollection<Item>;
  frases: Observable<Item[]>;

  constructor(private afsauth: AngularFireAuth, private afs: AngularFirestore) { }

  emitNavChangeEvent(number): void{
    this.navchange.emit(number);
    /* this.obtenerUsuario(); */
  }
  getNavChangeEmitter(): any{
    return this.navchange;
  }

  // tslint:disable-next-line: typedef
  async onRegister(user: Usuario){
    return await this.afsauth.createUserWithEmailAndPassword(user.email, user.contraseña)
      .then((res) => {
        this.afs.collection('users').doc(res.user.uid).set({
          id: res.user.uid,
          nombre: user.nombre,
          correo: user.email,
          contraseña: user.contraseña,
          apellido: user.apellido
        });
        return res;
      });
    }

 // tslint:disable-next-line: typedef
 async login(email, password){
  return firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(() =>  {
    /* console.log('pasa2'); */
    return firebase.auth().signInWithEmailAndPassword(email, password);
  });
}

 // tslint:disable-next-line: typedef
 async obtenerUsuario(){
  firebase.auth().onAuthStateChanged(async (user) => {
    if (user != null) {
      const algo = 'asdasdasd';
      this.tutor = user;
      (await this.getInformationProfile(this.tutor.uid)).subscribe(async usuariosCompletos => {
        this.usuarioFrase = await usuariosCompletos;
      });
      this.emitNavChangeEvent(1);

    } else {
      this.emitNavChangeEvent(0);
    }
  });
}

// tslint:disable-next-line: typedef
async obtenerUser(){
  const user = firebase.auth().currentUser;
  if (user != null){
    return user;
  }
  else{
    return;
  }
}


// tslint:disable-next-line: typedef
/* putUsuarioEnTutor(idUsuario: string, idTutor: string){
  return this.afs.collection('users').doc(idTutor).update({
    arregloUsuarios: firestore.FieldValue.arrayUnion(idUsuario)
  });
} */


// tslint:disable-next-line: typedef
async onOut() {
  this.tutor = {};
  this.usuarioFrase = null;
  firebase.auth().signOut().then(() => {

    this.emitNavChangeEvent(0);
    }).catch(function(error) {
      // An error happened.
    });
}


// tslint:disable-next-line: typedef
async registrarUsuario(user: Usprin){
  let id: string = null;
  await this.afs.collection('Usuarios').add({
    nombre: user.nombre,
    apellido: user.apellido,
    fechaDeNacimiento: user.fechaDeNacimiento,
    edad: user.edad,
    idTutor: user.idTutor,
    idUsuario: ''
  })
  .then((docRef) => {
    id = docRef.id;
    /* console.log("Document written with ID: ", docRef.id); */
  })
  .catch((error) => {
    console.error('Error adding document: ', error);
  });
  console.log('1');
  await this.afs.collection('Usuarios').doc(id).update({
    idUsuario: id
  });
  console.log('2');
}

// tslint:disable-next-line: typedef
async cambiarPass(nuevoPass: string){
  // tslint:disable-next-line: prefer-const
  let user = firebase.auth().currentUser;
  user.updatePassword(nuevoPass);
  await this.afs.collection('users').doc(user.uid).update({
    contraseña: nuevoPass
  });
}

// tslint:disable-next-line: typedef
/* async deleteUsuario(id: string, idTutor: string){
  this.borrado = false;
  (await this.getInformationProfile(idTutor)).subscribe(async (user) => {
    this.tutor = user;
    const index = this.tutor.arregloUsuarios.indexOf(id);
    if (index > -1){
      this.tutor.arregloUsuarios.splice(index, 1);
      console.log('borrado');
      this.borrado = true;
    }
    console.log(this.tutor.arregloUsuarios);
    await this.afs.collection('users').doc(idTutor).update({
      arregloUsuarios: this.tutor.arregloUsuarios
    });
    console.log(this.tutor.arregloUsuarios);
  });
} */

// tslint:disable-next-line: typedef
async usuarios(){
  await this.afs.collection('Usuarios')
}


// tslint:disable-next-line: typedef
async borrar(id){
  await this.afs.collection('Usuarios').doc(id).delete();
}


// tslint:disable-next-line: typedef
async usuariosPorId(){
  return  this.afs.collection('Usuarios').snapshotChanges().pipe(map(profesionales => {
    return profesionales.map(a => {
      const data = a.payload.doc.data() as Usprin;
      data.idUsuario = a.payload.doc.id;
      return data;
    });
  }));
}

// tslint:disable-next-line: typedef
async getInformationProfile(uid: string) {
  return  this.afs.collection('users').doc(uid).valueChanges();
}

async agregarFrase(frase, frec){
  let id: string = null;
  (await this.getInformationProfile(this.tutor.uid)).subscribe(async usuariosCompletos => {
    this.usuarioFrase = await usuariosCompletos;
    await this.afs.collection('Usuarios').doc(this.usuarioFrase.usuarioCargado).collection('Frases').add({
      listaFrase: frase,
      frecuencia: frec
    })
    .then((docRef) => {
      id = docRef.id;
      /* console.log("Document written with ID: ", docRef.id); */
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
    await this.afs.collection('Usuarios').doc(this.usuarioFrase.usuarioCargado).collection('Frases').doc(id).update({
      idFrase: id
    });
  });
}



  obtenerFrases() {
  this.frasesCollection =  this.afs.collection('Usuarios').doc(this.usuarioFrase.usuarioCargado).collection<Item>('Frases');
  this.frases = this.frasesCollection.valueChanges();  
  return this.frases;
  }

  async actualizarFrase(frec, id){
    (await this.getInformationProfile(this.tutor.uid)).subscribe(async usuariosCompletos => {
      this.usuarioFrase = await usuariosCompletos;
      console.log('idUsuario', this.usuarioFrase.usuarioCargado);
      await this.afs.collection('Usuarios').doc(this.usuarioFrase.usuarioCargado).collection('Frases').doc(id).update({
        frecuencia: frec
      });
    });
  }

  // Agenda

  async agregarEvento(newStart, newEnd, newDay, newTitle, newNP, newUrl){
    let id: string = null;
    (await this.getInformationProfile(this.tutor.uid)).subscribe(async usuariosCompletos => {
      this.usuarioFrase = await usuariosCompletos;
      await this.afs.collection('Usuarios').doc(this.usuarioFrase.usuarioCargado).collection('Agenda').add({
        start: newStart,
        end: newEnd,
        day: newDay,
        title: newTitle,
        nombrePicto: newNP,
        urlPicto: newUrl,
        idEvento: ''
      })
      .then((docRef) => {
        id = docRef.id;
        /* console.log("Document written with ID: ", docRef.id); */
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
      await this.afs.collection('Usuarios').doc(this.usuarioFrase.usuarioCargado).collection('Agenda').doc(id).update({
        idEvento: id
      });
    });
  }

  obtenerEvento(){
    console.log(this.usuarioFrase.usuarioCargado);
    this.eventosCollection =  this.afs.collection('Usuarios').doc(this.usuarioFrase.usuarioCargado).collection<Item>('Agenda');
    this.frases = this.eventosCollection.valueChanges();
    return this.frases;
  }

  async eliminarEvento(idEvento, idUsuario){
    await this.afs.collection('Usuarios').doc(idUsuario).collection('Agenda').doc(idEvento).delete();
  }
}
