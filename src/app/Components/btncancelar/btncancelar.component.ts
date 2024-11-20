import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btncancelar',
  standalone: true,
  imports: [],
  templateUrl: './btncancelar.component.html',
  styleUrls: ['./btncancelar.component.css']
})
export class BtncancelarComponent {
  @Output() closeClick = new EventEmitter<void>(); // Evento para el clic

  onClick() {
    this.closeClick.emit(); // Emitir el evento al hacer clic
  }
}