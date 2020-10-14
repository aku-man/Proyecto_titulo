import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { Usuario } from '../models/usuario.model';


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
  try {
    return await this.afsauth.signInWithEmailAndPassword(
      email,
      password
    );
  } catch (error) {}
 }
}
