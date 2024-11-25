import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btnoscuro',
  standalone: true,
  imports: [],
  templateUrl: './btnoscuro.component.html',
  styleUrl: './btnoscuro.component.css'
})
export class BtnoscuroComponent {
  @Output() toggleDarkMode = new EventEmitter<void>();

  onClick() {
    this.toggleDarkMode.emit(); // Emitir el evento al hacer clic
  }
}
