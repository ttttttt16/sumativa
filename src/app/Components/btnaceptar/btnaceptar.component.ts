import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btnaceptar',
  standalone: true,
  imports: [],
  templateUrl: './btnaceptar.component.html',
  styleUrl: './btnaceptar.component.css'
})
export class BtnaceptarComponent {
  @Output() acceptEvent = new EventEmitter<void>();

  onClick() {
    this.acceptEvent.emit(); // Emite el evento al hacer clic
  }
}
