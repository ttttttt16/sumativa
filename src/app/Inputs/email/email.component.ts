import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-email',
  standalone: true,
  imports: [FormsModule, BrowserModule, CommonModule],
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  @Input() email: string = '';
  @Output() emailChange = new EventEmitter<string>();
  emailErrors: string[] = [];

  validateEmail() {
    this.emailErrors = [];
    if (!this.email) {
      this.emailErrors.push('El correo electrónico es obligatorio.');
    } else if (!this.isValidEmail(this.email)) {
      this.emailErrors.push('El formato del correo electrónico es inválido.');
    }
    this.emailChange.emit(this.email); // Emitir el cambio
  }

  private isValidEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
}
