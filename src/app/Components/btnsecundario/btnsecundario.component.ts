import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btnsecundario',
  standalone: true,
  imports: [],
  templateUrl: './btnsecundario.component.html',
  styleUrl: './btnsecundario.component.css'
})
export class BtnsecundarioComponent {
  @Output() moveEvent = new EventEmitter<void>();

  onClick() {
    this.moveEvent.emit(); // Emite el evento al hacer clic
  }
}