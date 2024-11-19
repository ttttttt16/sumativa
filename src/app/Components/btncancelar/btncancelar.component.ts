import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btncancelar',
  standalone: true,
  imports: [],
  templateUrl: './btncancelar.component.html',
  styleUrls: ['./btncancelar.component.css']
})
export class BtncancelarComponent {
  @Output() buttonClick = new EventEmitter<void>();

  onClick() {
    this.buttonClick.emit(); // Emite el evento al hacer clic
  }
}