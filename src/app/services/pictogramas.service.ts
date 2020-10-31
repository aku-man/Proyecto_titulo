import { Injectable } from '@angular/core';
import { AngularFireStorageModule } from '@angular/fire/storage';
import * as firebase from 'firebase';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/observable';
import { AngularFirestore } from '@angular/fire/firestore';
import { CategoriaUsuario } from '../models/CategoriaUsuario.model';

@Injectable({
  providedIn: 'root'
})
export class PictogramasService {

  uploadPercent: Observable<number>;
  urlImage: Observable<string>;
  url: any;
  constructor(private storage: AngularFireStorageModule, private afs: AngularFirestore) { }

  subirImagenStorage(datosArchivo): any{
    const id = Math.random().toString(36).substring(2);
    const file = datosArchivo.target.files[0];
    const filePath = `personalizada/${id}`;
    const ref = firebase.storage().ref(filePath);
    return ref.put(file).then((snapshot) => {
      return snapshot.ref.getDownloadURL().then(async usuariosCompletos => {
        this.url = usuariosCompletos;
        return this.url;
      });
    })
    .catch((error ) => {
      console.log('error', error);
      return;
    });
  }


  async registrarCategoria(user: CategoriaUsuario, idCategoria: string ){
    let id: string = null;
    await this.afs.collection('Usuarios').doc(idCategoria).collection('Categoria').add({
      nombreCategoria: user.nombre,
      url: user.url,
      idCategoria: ''
    })
    .then((docRef) => {
      id = docRef.id;
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
    await this.afs.collection('Usuarios').doc(idCategoria).collection('Categoria').doc(id).update({
      idCategoria: id
    });
  }
}
