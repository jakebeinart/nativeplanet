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
export class LandingPageComponent {
  // --- Configuration ---
  businessEmail: string = 'info@nativeplanetstl.com'; // <-- CHANGE THIS to the actual business email
  emailSubject: string = 'Inquiry about Native Landscaping Services';
  emailBodyTemplate: string = `Hello Native Planet Team,
 
     I'm interested in learning more about your native landscaping services.
 
     Specifically, I'd like to know more about:
     [Please briefly describe your project or question here, e.g., lawn conversion, rain garden design, maintenance]
 
     I look forward to hearing from you!
 
     Thanks,
     [Your Name]
     [Your Phone Number - Optional]
     `;
  // --- End Configuration ---

  /**
   * Opens the default email client with pre-filled information.
   */
  openEmailClient(): void {
    // Encode subject and body for URL safety
    const subject = encodeURIComponent(this.emailSubject);
    // Encode body, ensuring newlines are properly handled (%0D%0A or just %0A depending on client)
    const body = encodeURIComponent(this.emailBodyTemplate);

    // Construct the mailto link
    const mailtoLink = `mailto:${this.businessEmail}?subject=${subject}&body=${body}`;

    // Trigger the email client
    // Using window.location.href is a common way to trigger mailto links from JS
    window.location.href = mailtoLink;
  }
}
