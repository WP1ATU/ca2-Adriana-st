import { Routes } from '@angular/router';
import { Home } from './Components/home/home';
import { About } from './Components/about/about';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About }
];
