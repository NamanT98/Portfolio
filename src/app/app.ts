import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navigation } from './core/navigation/navigation';
import { Footer } from './core/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navigation, Footer],
  templateUrl: './app.html'
})
export class App { }
