import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { EmailComponent } from '../email/email.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {
  @Input() password: string = '';
  @Output() passwordChange = new EventEmitter<string>();
  passwordErrors: string[] = [];

  validatePassword() {
    this.passwordErrors = [];
    if (!this.password) {
      this.passwordErrors.push('La contraseña es obligatoria.');
    } else if (this.password.length < 8) {
      this.passwordErrors.push('La contraseña debe tener al menos 8 caracteres.');
    }
    this.passwordChange.emit(this.password); // Emitir el cambio
  }
}