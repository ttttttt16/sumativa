import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { EmailComponent } from '../../Inputs/email/email.component';
import { PasswordComponent } from '../../Inputs/password/password.component';
import { TextoComponent } from '../../Inputs/texto/texto.component';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  @Input() colorChange: boolean = false; // Propiedad para cambiar el color
  @Input() move: boolean = false; // Propiedad para controlar el movimiento
  color: string = 'blue'; // Color inicial
  position: number = 0; // Inicializa la posición
  @Input() email: string = '';
  @Input() password: string = '';
  @Input() text: string = '';
  @Input() successMessage: string = ''; // Nueva propiedad para el mensaje de éxito



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
