import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthProvider } from 'ngx-auth-firebaseui';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSuccess(): void {
    /* this.router.navigate(['/home']); */
    console.log('logea3');
  }

  onResetPasswordRequested(): void {
  /*   const _dialogGrafico = this.dialog.open(ForgotPasswordComponent, {
      width: '25vw',
      height : '35vh',
      data: {
      }
    }); */

  }

  formSubmit(f: NgForm): void {/*
    this.router.navigate(['dashboard/v2']); */
  }
}
