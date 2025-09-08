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
    if (!isPlatformBrowser(this.platformId)) return; // only run in browser

    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
    (entries) => {
      let mostVisible: { id: string; ratio: number } | null = null;

      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!mostVisible || entry.intersectionRatio > mostVisible.ratio) {
            mostVisible = { id: entry.target.id, ratio: entry.intersectionRatio };
          }
        }
      });

      if (mostVisible) {
        this.ngZone.run(() => {
          this.activeSection = mostVisible!.id;
        });
      }
      // else: don't reset to '' → keep the last active section
    },
    { root: null, rootMargin: '0px', threshold: Array.from({ length: 41 }, (_, i) => (i + 60) / 100) }
  );

    sections.forEach(section => observer.observe(section));
    
  }
}
