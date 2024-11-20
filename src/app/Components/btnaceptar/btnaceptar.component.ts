import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btnaceptar',
  standalone: true,
  imports: [],
  templateUrl: './btnaceptar.component.html',
  styleUrls: ['./btnaceptar.component.css']
})
export class BtnaceptarComponent {
  @Output() acceptClick = new EventEmitter<void>(); // Evento para el clic

  onClick() {
    this.acceptClick.emit(); // Emitir el evento al hacer clic
  }
}