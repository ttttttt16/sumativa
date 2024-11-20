import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {
  password: string = '';
  passwordErrors: string[] = [];

  validatePassword(form: NgForm) {
    this.passwordErrors = [];
    if (!this.password) {
      this.passwordErrors.push('El campo de contraseña es obligatorio.');
    } else if (this.password.length < 8) {
      this.passwordErrors.push('La contraseña debe tener al menos 8 caracteres.');
    }
  }
}