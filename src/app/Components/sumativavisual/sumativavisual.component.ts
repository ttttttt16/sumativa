import { Component } from '@angular/core';
import { BtnprimarioComponent } from '../btnprimario/btnprimario.component';
import { ViewComponent } from '../../Visualizar/view/view.component';
import { BtnsecundarioComponent } from '../btnsecundario/btnsecundario.component';
import { BtnaceptarComponent } from '../btnaceptar/btnaceptar.component';
import { BtncancelarComponent } from '../btncancelar/btncancelar.component';
import { EmailComponent } from '../../Inputs/email/email.component';
import { PasswordComponent } from '../../Inputs/password/password.component';
import { TextoComponent } from '../../Inputs/texto/texto.component';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-sumativavisual',
  standalone: true,
  imports: [BtnprimarioComponent, ViewComponent, BtnsecundarioComponent, BtnaceptarComponent, CommonModule, EmailComponent, PasswordComponent, TextoComponent, FormsModule],
  templateUrl: './sumativavisual.component.html',
  styleUrls: ['./sumativavisual.component.css']
})
export class SumativavisualComponent {
  colorChange: boolean = false; // Variable para controlar el cambio de color
  move: boolean = false; // Variable para controlar el movimiento
  successMessage: string = '';
  email: string = '';
  password: string = '';
  texto: string = '';

  onColorButtonClick() {
    this.colorChange = !this.colorChange; // Cambia el estado de color
  }

  onMoveButtonClick() {
    this.move = !this.move; // Cambia el estado de movimiento
  }

  onAccept() {
    this.successMessage = 'Mensaje enviado con éxito';
  }

  get isEmailValid() {
    return this.email !== '' && /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(this.email);
  }

  get isPasswordValid() {
    return this.password.length >= 8;
  }

  get isFormValid() {
    return this.isEmailValid && this.isPasswordValid;
  }
}