import { Component, Input, OnChanges } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [BrowserModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  @Input() colorChange: boolean = false; // Propiedad para cambiar el color
  @Input() move: boolean = false; // Propiedad para controlar el movimiento
  @Input() showMessage: boolean = false; // Propiedad para mostrar el mensaje
  message: string = ''; // Mensaje a mostrar
  color: string = 'blue'; // Color inicial
  position: number = 0; // Inicializa la posición

  ngOnChanges() {
    if (this.colorChange) {
      this.changeColor(); // Cambia el color si se recibe el evento
    }
    if (this.move) {
      this.moveBox(); // Mueve la caja si se recibe el evento
    }
    if (this.showMessage) {
      this.displayMessage(); // Muestra el mensaje si se recibe el evento
    }
  }

  changeColor() {
    this.color = this.color === 'blue' ? 'red' : 'blue'; // Cambia entre dos colores
  }

  moveBox() {
    this.position += 10; // Incrementa la posición para mover la caja
  }

  displayMessage() {
    this.message = '¡Acción aceptada!'; // Mensaje a mostrar
  }
}
