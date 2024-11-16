import { Component, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [BrowserModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  @Input() colorChange: boolean = false;
  color: string = 'blue'; // Color inicial

  ngOnChanges() {
    if (this.colorChange) {
      this.changeColor();
    }
  }

  changeColor() {
    this.color = this.color === 'blue' ? 'red' : 'blue'; // Cambia entre dos colores
  }
}
