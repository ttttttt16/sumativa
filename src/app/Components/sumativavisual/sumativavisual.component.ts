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
import { BtnoscuroComponent } from '../btnoscuro/btnoscuro.component';

@Component({
  selector: 'app-sumativavisual',
  standalone: true,
  imports: [BtnprimarioComponent, ViewComponent, BtnsecundarioComponent, BtnaceptarComponent, CommonModule, EmailComponent, PasswordComponent, TextoComponent, FormsModule, BtnoscuroComponent, BtncancelarComponent],
  templateUrl: './sumativavisual.component.html',
  styleUrls: ['./sumativavisual.component.css']
})
export class SumativavisualComponent {
  colorChange: boolean = false; // Variable para controlar el cambio de color
  move: boolean = false; // Variable para controlar el movimiento
  successMessage: string = '';
  showMessage: boolean = false; // Variable para controlar la visibilidad del mensaje
  email: string = '';
  password: string = '';
  texto: string = '';
  isDarkMode: boolean = false; // Agregar estado para modo oscuro


  onColorButtonClick() {
    this.colorChange = !this.colorChange; // Cambia el estado de color
  }

  onMoveButtonClick() {
    this.move = !this.move; // Cambia el estado de movimiento
  }

  onAcceptClick() {
    this.showMessage = !this.showMessage; // Alternar el estado
  }

  onToggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode); // Agregar o quitar clase dark-mode
  }

}