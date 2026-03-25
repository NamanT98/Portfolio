import { Component } from '@angular/core';
import { About } from '../about/about';
import { Resume } from '../resume/resume';
import { Skills } from '../skills/skills';
import { Portfolio } from '../portfolio/portfolio';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-main',
  imports: [About, Resume, Skills, Portfolio, Contact],
  templateUrl: './main.html'
})
export class Main { }
