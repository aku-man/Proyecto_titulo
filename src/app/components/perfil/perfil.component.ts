import { Component, OnInit, Input, OnChanges, Output} from '@angular/core';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  isCollapsed = true;
  constructor() { }
  ngOnInit(): void {
  }

}
