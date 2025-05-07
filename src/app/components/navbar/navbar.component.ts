import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroBars3 } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIcon],
  providers: [provideIcons({ heroBars3 })],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isMenuOpen = false;
  isScrolled = false;
  links: { name: string; path: string }[] = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Services', path: '/services' },
  ];
  // Use ViewChild to get a reference to the navbar element
  @ViewChild('navbar', { static: true }) navbar!: ElementRef;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Set `isScrolled` to true if the page is scrolled down at least 50px
    this.isScrolled = window.scrollY > 50;
  }

  // Listen for clicks anywhere on the document
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const targetElement = event.target as HTMLElement;

    // Check if the clicked element is outside the navbar element
    if (this.navbar && !this.navbar.nativeElement.contains(targetElement)) {
      this.isMenuOpen = false; // Close the menu
    }
  }
}
