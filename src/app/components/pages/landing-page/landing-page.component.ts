import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  heroArrowPath,
  heroArrowUp,
  heroEnvelope,
  heroGlobeAmericas,
  heroPaintBrush,
  heroPhone,
  heroSparkles,
  heroWrench,
  heroWrenchScrewdriver,
} from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NgIcon],
  providers: [
    provideIcons({
      heroWrench,
      heroGlobeAmericas,
      heroArrowPath,
      heroEnvelope,
      heroPhone,
      heroPaintBrush,
      heroWrenchScrewdriver,
      heroArrowUp,
      heroSparkles,
    }),
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {}
