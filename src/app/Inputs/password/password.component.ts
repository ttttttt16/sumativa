import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [FormsModule, BrowserModule],
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {
  password: string = '';
  isValid: boolean = true;

  validatePassword() {
    this.isValid = this.password.length >= 8;
  }
}