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

  constructor(private afs: AngularFirestore) {
  }

  obtenerCategorias(): any{
    this.itemsCollection = this.afs.collection<Item>('categorias');
    this.items = this.itemsCollection.valueChanges();
  }

  obtenerCategoriaN(nombreCategoria: string): any{
    this.pictogramaCollection = this.afs.collection<Item>(nombreCategoria);
    this.pictogramas = this.pictogramaCollection.valueChanges();
    return this.pictogramas;
  }

  retornaItems(): any{
    this.obtenerCategorias();
    return this.items;
  }
}



