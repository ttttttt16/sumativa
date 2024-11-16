import { Component } from '@angular/core';
import { BtnprimarioComponent } from '../btnprimario/btnprimario.component';
import { ViewComponent } from '../../Visualizar/view/view.component';
import { BtnsecundarioComponent } from '../btnsecundario/btnsecundario.component';
import { PasswordComponent } from '../../Inputs/password/password.component';

@Component({
  selector: 'app-sumativavisual',
  standalone: true,
  imports: [BtnprimarioComponent, ViewComponent, BtnsecundarioComponent, PasswordComponent],
  templateUrl: './sumativavisual.component.html',
  styleUrls: ['./sumativavisual.component.css']
})
export class SumativavisualComponent {
  colorChange: boolean = false; // Variable para controlar el cambio de color
  move: boolean = false; // Variable para controlar el movimiento
  showMessage: boolean = false;
  password: string = '';
  email: string = '';
  text: string = '';


  onColorButtonClick() {
    this.colorChange = !this.colorChange; // Cambia el estado de color
  }

  onMoveButtonClick() {
    this.move = !this.move; // Cambia el estado de movimiento
  }

  onAccept() {
    this.showMessage = true;
  }

  onCancel() {
    this.showMessage = false;
  }
}