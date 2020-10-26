import { trigger } from '@angular/animations';
import { Component, Input, Output, EventEmitter, Renderer2, OnInit, OnChanges, SimpleChanges, OnDestroy, ChangeDetectorRef, DoCheck } from '@angular/core';
import {} from '@angular/material/menu';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from '../../models/usuario.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit, OnDestroy, DoCheck {
  user: Usuario = new Usuario();
  loggeado: any;
  largo: number;

  catSelectedAux: number;
  item: number = 0;
  subscription: any;

  constructor( private changeDetectorRef: ChangeDetectorRef, private usuario: UsuariosService, private router: Router){}


  ngDoCheck(): void {
    this.subscription = this.usuario.getNavChangeEmitter()
       .subscribe((item) => this.selectedNavItem(item));
  }


  /* async ngOnChanges(changes: SimpleChanges) {
    await this.verificar();
  } */

  async ngOnInit() {
   await this.verificar();
   this.subscription = this.usuario.getNavChangeEmitter()
      .subscribe((item) => this.selectedNavItem(item));
  }

  selectedNavItem(item: number): void{
    console.log(this.item);
    this.item = item;
    console.log(this.item);
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }


  async verificar(){
   await this.usuario.obtenerUsuario();
   console.log('verifica', this.item);
  }

  receiveCaca($event): void{
    console.log('selected', this.catSelectedAux);
    this.catSelectedAux = $event;
    console.log('selected', this.catSelectedAux);
  }

  async onLogOut(){
    const resul = await this.usuario.onOut();
    console.log('asdd', resul);
    this.loggeado = await this.usuario.obtenerUsuario();
    if (resul !== undefined) {
      this.router.navigate(['/Tablero']);
    }
  }
}


