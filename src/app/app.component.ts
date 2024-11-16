import { Component } from '@angular/core';
import { SumativavisualComponent } from './Components/sumativavisual/sumativavisual.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SumativavisualComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
}