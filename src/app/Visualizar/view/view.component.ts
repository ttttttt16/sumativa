import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  @Input() colorChange: boolean = false; // Propiedad para cambiar el color
  @Input() move: boolean = false; // Propiedad para controlar el movimiento
  @Input() password: string = ''; // Para recibir el valor de la contraseña
  @Input() email: string = ''; // Para recibir el valor del email
  @Input() text: string = ''; // Para recibir el valor del texto
  color: string = 'blue'; // Color inicial
  position: number = 0; // Inicializa la posición

  ngOnChanges() {
    if (this.colorChange) {
      this.changeColor(); // Cambia el color si se recibe el evento
    }
    if (this.move) {
      this.moveBox(); // Mueve la caja si se recibe el evento
    }
  }


  changeColor() {
    this.color = this.color === 'blue' ? 'red' : 'blue'; // Cambia entre dos colores
  }

  moveBox() {
    this.position += 10; // Incrementa la posición para mover la caja
  }
}
