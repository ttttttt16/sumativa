import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btnaceptar',
  standalone: true,
  imports: [],
  templateUrl: './btnaceptar.component.html',
  styleUrls: ['./btnaceptar.component.css']
})
export class BtnaceptarComponent {
  @Output() acceptClick = new EventEmitter<void>(); // Define el evento de salida

  onClick() {
    this.acceptClick.emit(); // Emite el evento cuando se hace clic
  }
}