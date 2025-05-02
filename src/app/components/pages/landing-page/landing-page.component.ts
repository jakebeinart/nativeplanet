import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  heroArrowPath,
  heroEnvelope,
  heroGlobeAmericas,
  heroPhone,
  heroWrench,
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
    }),
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {}
