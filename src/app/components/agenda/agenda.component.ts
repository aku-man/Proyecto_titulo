import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from '../../models/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  constructor(private usuario: UsuariosService, private router: Router) { }
  loggeado: any;
  ngOnInit(): void {
  }
  async onLogOut(){
    const resul = await this.usuario.onOut();
    /* console.log('asdd', resul); */
    this.loggeado = await this.usuario.obtenerUsuario();
    if (resul !== undefined) {
      this.router.navigate(['/Tablero']);
    }
  }
}
