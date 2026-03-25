import { Routes } from '@angular/router';
import { Main } from './features/main/main';
import { AllProjects } from './features/all-projects/all-projects';

export const routes: Routes = [
  { path: '', component: Main },
  { path: 'projects', component: AllProjects },
  { path: '**', redirectTo: '' }
];
