import { Component, AfterViewInit, NgZone, Inject, PLATFORM_ID, signal, HostListener } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})

export class Header implements AfterViewInit {
  isMenuOpen = signal(false);
  activeSection: string = 'about';

  constructor(private ngZone: NgZone, @Inject(PLATFORM_ID) private platformId: Object) {}
  
  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.onScroll();
    window.addEventListener('scroll', this.onScroll.bind(this), { passive: true });
  }

  onScroll() {
    const sections = Array.from(document.querySelectorAll('section')) as HTMLElement[];
    let currentSection = sections[0]?.id || '';
    let maxVisible = 0;
    const offset = 80; // adjust for sticky header height if needed
    const viewportHeight = window.innerHeight;

    for (const section of sections) {
      const rect = section.getBoundingClientRect();
      // Calculate visible height in viewport
      const visible = Math.max(0, Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, offset));
      if (visible > maxVisible) {
        maxVisible = visible;
        currentSection = section.id;
      }
    }
    this.ngZone.run(() => {
      this.activeSection = currentSection;
    });
  }
}
