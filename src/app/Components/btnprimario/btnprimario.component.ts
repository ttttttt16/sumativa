import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btnprimario',
  standalone: true,
  imports: [],
  templateUrl: './btnprimario.component.html',
  styleUrl: './btnprimario.component.css'
})
export class BtnprimarioComponent {
  @Output() buttonClick = new EventEmitter<void>();

  onClick() {
    this.buttonClick.emit();
  }
}