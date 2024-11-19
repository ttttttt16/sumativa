import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btnaceptar',
  standalone: true,
  imports: [],
  templateUrl: './btnaceptar.component.html',
  styleUrls: ['./btnaceptar.component.css']
})
export class BtnaceptarComponent {
  @Output() buttonClick = new EventEmitter<void>();

  onClick() {
    this.buttonClick.emit(); // Emite el evento al hacer clic
  }
}