import { Component } from '@angular/core';
import { BtnprimarioComponent } from '../btnprimario/btnprimario.component';
import { ViewComponent } from '../../Visualizar/view/view.component';

@Component({
  selector: 'app-sumativavisual',
  standalone: true,
  imports: [BtnprimarioComponent, ViewComponent],
  templateUrl: './sumativavisual.component.html',
  styleUrl: './sumativavisual.component.css'
})
export class SumativavisualComponent {
  colorChange: boolean = false;

  onButtonClick() {
    this.colorChange = !this.colorChange; // Cambia el estado para indicar que se debe cambiar el color
  }
}
