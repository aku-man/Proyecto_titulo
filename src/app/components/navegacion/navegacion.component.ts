import { trigger } from '@angular/animations';
import { Component, Input, Output, EventEmitter, Renderer2, OnInit, OnChanges, SimpleChanges, OnDestroy, ChangeDetectorRef } from '@angular/core';
import {} from '@angular/material/menu';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from '../../models/usuario.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit, OnDestroy {
  user: Usuario = new Usuario();
  loggeado: any;
  largo: number;

  catSelectedAux: number;
  item: number = 1;
  subscription: any;

  constructor( private changeDetectorRef: ChangeDetectorRef, private usuario: UsuariosService, private router: Router){}

  async ngOnChanges(changes: SimpleChanges) {
    await this.verificar();
    this.changeDetectorRef.detectChanges();
  }

  async ngOnInit() {
   await this.verificar();
   this.subscription = this.usuario.getNavChangeEmitter()
      .subscribe((item) => this.selectedNavItem(item));
      
    this.changeDetectorRef.detectChanges();
  }

  selectedNavItem(item: number) {
    console.log(this.item);
    this.item = item;
    console.log(this.item);
    this.changeDetectorRef.detectChanges();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.changeDetectorRef.detectChanges();
  }
  


  async verificar(){
   await this.usuario.obtenerUsuario();
   console.log('verifica', this.item)
/*    this.usuario.largo.subscribe((number) =>{
    this.largo = number;
    console.log(number)
  }) */
  }

  receiveCaca($event): void{
    
    console.log('selected', this.catSelectedAux)
    this.catSelectedAux = $event;
    console.log('selected', this.catSelectedAux)
  }

  async onLogOut() {
    let resul = await this.usuario.onOut();
    console.log('asdd',resul)
   this.loggeado = await this.usuario.obtenerUsuario();
    if (resul !== undefined) { 
      this.router.navigate(['/Tablero']); 
    }
  }
}


