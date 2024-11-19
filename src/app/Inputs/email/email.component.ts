import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [FormsModule, BrowserModule],
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  email: string = '';
  isValid: boolean = true;

  @Output() emailChange = new EventEmitter<string>();

  validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.isValid = emailPattern.test(this.email);
    this.emailChange.emit(this.email); // Emitir el cambio
  }
}