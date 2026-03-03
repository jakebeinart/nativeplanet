import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { GamesPageComponent } from './components/pages/games-page/games-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'games', component: GamesPageComponent, pathMatch: 'full' },
];
