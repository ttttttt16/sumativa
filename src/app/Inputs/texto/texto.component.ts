import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-texto',
  standalone: true,
  imports: [FormsModule, BrowserModule],
  templateUrl: './texto.component.html',
  styleUrls: ['./texto.component.css']
})
export class TextoComponent {
  texto: string = '';
  isValid: boolean = true;

  validateTexto() {
    this.isValid = /^[a-zA-Z0-9\s]*$/.test(this.texto) && this.texto.length > 0;
  }
}