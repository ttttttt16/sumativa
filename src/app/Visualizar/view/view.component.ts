import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { EmailComponent } from '../../Inputs/email/email.component';
import { PasswordComponent } from '../../Inputs/password/password.component';
import { TextoComponent } from '../../Inputs/texto/texto.component';
import { BtncancelarComponent } from '../../Components/btncancelar/btncancelar.component';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [CommonModule, FormsModule, BtncancelarComponent],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css',
  animations: [
    trigger('messageAnimation', [
      state('void', style({ opacity: 0, transform: 'translateY(-20px)' })),
      transition(':enter', [
        animate('300ms ease-in')
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0, transform: 'translateY(20px)' }))
      ])
    ])
  ]
})
export class ViewComponent {
  @Input() colorChange: boolean = false; // Propiedad para cambiar el color
  @Input() move: boolean = false; // Propiedad para controlar el movimiento
  color: string = 'blue'; // Color inicial
  position: number = 0; // Inicializa la posición
  @Input() email: string = '';
  @Input() password: string = '';
  @Input() text: string = '';
  @Input() showMessage: boolean = false; // Nueva propiedad para controlar la visibilidad del mensaje
  @Input() isDarkMode: boolean = false; // Asegúrate de que esta propiedad esté definida




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

  closeMessage() {
    this.showMessage = false; // Cambiar el estado para ocultar el mensaje
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode; // Cambiar el estado del modo oscuro
  }


}
