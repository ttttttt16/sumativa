import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btnoscuro',
  standalone: true,
  imports: [],
  templateUrl: './btnoscuro.component.html',
  styleUrl: './btnoscuro.component.css'
})
export class BtnoscuroComponent {
  @Output() darkModeToggle = new EventEmitter<void>(); // Evento para el toggle

  onClick() {
    this.darkModeToggle.emit(); // Emitir el evento al hacer clic
  }
}
