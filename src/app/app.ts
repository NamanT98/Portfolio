import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navigation } from './core/navigation/navigation';
import { Footer } from './core/footer/footer';
import { BackgroundAnimation } from './core/background-animation/background-animation';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navigation, Footer, BackgroundAnimation],
  templateUrl: './app.html'
})
export class App { }
