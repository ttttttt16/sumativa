import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SumativavisualComponent } from './Components/sumativavisual/sumativavisual.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SumativavisualComponent, FormsModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
}