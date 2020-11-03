import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Item { nombre: string; }

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  private pictogramaCollection: AngularFirestoreCollection<Item>;
  pictogramas: Observable<Item[]>;
  private gruposCollection: AngularFirestoreCollection<Item>;
  grupos: Observable<Item[]>;
  private categoriaUsuarioCollection: AngularFirestoreCollection<Item>;
  categoriaUsuario: Observable<Item[]>;
  private pictogramaUsuarioCollection: AngularFirestoreCollection<Item>;
  pictogramaUsuario: Observable<Item[]>;

  idUsuario = 'usuario no cargado';

  constructor(private afs: AngularFirestore) {}

  obtenerCategorias(idGrupo, id): any{
    if (idGrupo === 'sTMqvckVT2YutTDmoXzD'){
      if (id !== null){
        this.itemsCollection = this.afs.collection('Usuarios').doc(id).collection<Item>('Categoria');
        this.items = this.itemsCollection.valueChanges();
      }
      else {
        this.items = null;
        console.log('no hay usuario cargado');
      }
    }
    else {
      this.itemsCollection = this.afs.collection<Item>('categorias');
      this.items = this.itemsCollection.valueChanges();
    }

  }

  obtenerCategoriaN(nombreCategoria: string): any{
    // console.log(nombreCategoria);
    this.pictogramaCollection = this.afs.collection<Item>(nombreCategoria);
    this.pictogramas = this.pictogramaCollection.valueChanges();
    return this.pictogramas;
  }

  obtenerPictogramas(id: string): any{
    // console.log(nombreCategoria);
    this.pictogramaCollection = this.afs.collection('Usuarios').doc(id).collection<Item>('Pictograma');
    this.pictogramas = this.pictogramaCollection.valueChanges();
    return this.pictogramas;
  }

  retornaItems(idGrupo, id): any{
    console.log(id);
    this.obtenerCategorias(idGrupo, id);
    return this.items;
  }

  obtenerGrupos(): any{
    this.gruposCollection = this.afs.collection<Item>('Grupo');
    this.grupos = this.gruposCollection.valueChanges();
    // console.log(this.grupos);
    return this.grupos;
  }

  obtenerCategoriasUsuario(id: string): any{
    console.log(id);
    this.categoriaUsuarioCollection = this.afs.collection<Item>('Usuarios').doc(id).collection('Categoria');
    this.categoriaUsuario = this.categoriaUsuarioCollection.valueChanges();
    return this.categoriaUsuario;
  }

  obtenerPictogramasUsuario(id: string): any{
    console.log(id);
    this.pictogramaUsuarioCollection = this.afs.collection<Item>('Usuarios').doc(id).collection('Pictograma');
    this.pictogramaUsuario = this.pictogramaUsuarioCollection.valueChanges();
    return this.pictogramaUsuario;
  }

  async cargarUsuario(idUsuarioPerfil, idTutor){
    this.idUsuario = idUsuarioPerfil;
    await this.afs.collection('users').doc(idTutor).update({
      usuarioCargado: idUsuarioPerfil
    });
  }
}



