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
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-sumativavisual',
  standalone: true,
  imports: [BtnprimarioComponent, ViewComponent, BtnsecundarioComponent, BtnaceptarComponent, BtncancelarComponent, CommonModule, EmailComponent, PasswordComponent, TextoComponent],
  templateUrl: './sumativavisual.component.html',
  styleUrls: ['./sumativavisual.component.css']
})
export class SumativavisualComponent {
  colorChange: boolean = false; // Variable para controlar el cambio de color
  move: boolean = false; // Variable para controlar el movimiento
  email: string = '';
  password: string = '';
  texto: string = '';

  onColorButtonClick() {
    this.colorChange = !this.colorChange; // Cambia el estado de color
  }

  onMoveButtonClick() {
    this.move = !this.move; // Cambia el estado de movimiento
  }

  validateForm(): boolean {
    return !!this.email && !!this.password && !!this.texto;
  }
}