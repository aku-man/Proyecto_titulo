import { Injectable, EventEmitter, Output } from "@angular/core";
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { Usuario } from '../models/usuario.model';
import * as firebase from "firebase";
import { ConstantPool } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  navchange: EventEmitter<number> = new EventEmitter();
  
  user$: Observable<any>;
 // @Output() user$ = new EventEmitter<number>();
  //user$ = new EventEmitter< Usuario >();
  nuevoUsuario = {
    id: '',
    nombre: '',
    apellido: '',
    correo: '',
    contraseña: ''
  };

  nuevoId: string = null;
  
  largo = new EventEmitter< number >();
  //largo = new EventEmitter< number >();
  constructor(private afsauth: AngularFireAuth, private afs: AngularFirestore) { }

  emitNavChangeEvent(number) {
    this.navchange.emit(number);
  }
  getNavChangeEmitter() {
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
    console.log('pasa2')
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return firebase.auth().signInWithEmailAndPassword(email, password)
  })
/*   return this.afsauth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(()=>{
     return this.afsauth.signInWithEmailAndPassword(email,password);
   }) 
  /*  try {
    return this.afsauth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then(()=>{
      return this.afsauth.signInWithEmailAndPassword(email,password);
    }) 
  } catch (error) {}  */
 // return firebase.auth().signInWithEmailAndPassword(email, password)
 /*   .catch(function(error) {
    // Handle Errors here.
    console.log('errrrrrrrrr',error.code)
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  }); */
 }

 async obtenerUsuario() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      const algo = "asdasdasd";
      console.log('user', user)
      this.emitNavChangeEvent(1);

    } else {
      console.log('no esta');
      this.emitNavChangeEvent(0);
      
    }
  });
}

async onOut() {

 firebase.auth().signOut().then(() => {
   console.log('si');

   this.emitNavChangeEvent(0);
  }).catch(function(error) {
    // An error happened.
  });/* 
  try {
    return await this.afsauth
      .signOut()
      .then(function () {});
  } catch (error) {
    console.log(error);
  } */
}
}
