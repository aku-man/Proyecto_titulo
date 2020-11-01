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

  constructor(private afs: AngularFirestore) {}

  obtenerCategorias(): any{
    this.itemsCollection = this.afs.collection<Item>('categorias');
    this.items = this.itemsCollection.valueChanges();
  }

  obtenerCategoriaN(nombreCategoria: string): any{
    // console.log(nombreCategoria);
    this.pictogramaCollection = this.afs.collection<Item>(nombreCategoria);
    this.pictogramas = this.pictogramaCollection.valueChanges();
    return this.pictogramas;
  }

  retornaItems(): any{
    this.obtenerCategorias();
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
}



