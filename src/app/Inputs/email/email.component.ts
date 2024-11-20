import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-email',
  standalone: true,
  imports: [FormsModule, BrowserModule, CommonModule],
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  email: string = '';
  emailErrors: string[] = [];

  validateEmail(form: NgForm) {
    this.emailErrors = [];
    if (!this.email) {
      this.emailErrors.push('El campo de correo electrónico es obligatorio.');
    } else {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(this.email)) {
        this.emailErrors.push('Por favor, ingrese un correo electrónico válido.');
      }
    }
  }
}
