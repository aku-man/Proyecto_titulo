import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  nuevoUsuario = {
    id: '',
    nombre: '',
    apellido: '',
    correo: '',
    contraseña: ''
  };

  nuevoId: string = null;
  constructor(private afsauth: AngularFireAuth, private afs: AngularFirestore) { }

  guardarUsuario(email, pass, nombre, apellido): any{
    this.afsauth.createUserWithEmailAndPassword(email, pass).catch(error => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    this.nuevoUsuario.correo = email;
    this.nuevoUsuario.contraseña = pass;
    this.nuevoUsuario.nombre = nombre;
    this.nuevoUsuario.apellido = apellido;
    this.afs.collection('Tutor').add(this.nuevoUsuario).then(doc => this.obtenerId(doc.id) );

  }

  obtenerId(id): void {
    this.nuevoId = id;
    console.log(this.nuevoId);
    this.afs.collection('Tutor').doc(this.nuevoId).update({id: this.nuevoId}).then( exito => {
      console.log('se logro');
    })
    .catch(e => console.log('error', e));
  }
}
