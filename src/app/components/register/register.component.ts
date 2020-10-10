import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  router: any;

  constructor() {
  }

  ngOnInit(): void {
  }
  formSubmit(f: NgForm): void {
    this.router.navigate(['dashboard/v2']);
  }

}
