import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {
  password: string = '';
  isPasswordVisible: boolean = false;

  @Output() passwordChange = new EventEmitter<string>();

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  validatePassword() {
    this.passwordChange.emit(this.password);
  }
}