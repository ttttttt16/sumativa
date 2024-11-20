import { Component } from '@angular/core';
import { SumativavisualComponent } from './Components/sumativavisual/sumativavisual.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgModel } from '@angular/forms';


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