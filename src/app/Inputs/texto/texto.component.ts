import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PasswordComponent } from '../password/password.component';

@Component({
  selector: 'app-texto',
  standalone: true,
  imports: [FormsModule, BrowserModule],
  templateUrl: './texto.component.html',
  styleUrls: ['./texto.component.css']
})
export class TextoComponent {
  texto: string = '';
}