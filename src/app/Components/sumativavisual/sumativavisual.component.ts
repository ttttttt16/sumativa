import { Component } from '@angular/core';
import { BtnprimarioComponent } from '../btnprimario/btnprimario.component';
import { ViewComponent } from '../../Visualizar/view/view.component';
import { BtnsecundarioComponent } from '../btnsecundario/btnsecundario.component';
import { BtnaceptarComponent } from '../btnaceptar/btnaceptar.component';

@Component({
  selector: 'app-sumativavisual',
  standalone: true,
  imports: [BtnprimarioComponent, ViewComponent, BtnsecundarioComponent, BtnaceptarComponent],
  templateUrl: './sumativavisual.component.html',
  styleUrls: ['./sumativavisual.component.css']
})
export class SumativavisualComponent {
  colorChange: boolean = false; // Controla el cambio de color
  move: boolean = false; // Controla el movimiento del cuadro
  showMessage: boolean = false; // Controla la visualización del mensaje

  onPrimaryButtonClick() {
    this.colorChange = true; // Cambia el estado para cambiar el color
  }

  onSecondaryButtonClick() {
    this.move = true; // Cambia el estado para mover el cuadro
  }

  onAcceptButtonClick() {
    this.showMessage = true; // Cambia el estado para mostrar el mensaje
  }
}