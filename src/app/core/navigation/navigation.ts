import { Component, HostListener, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-navigation',
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class Navigation implements OnInit {
  isDarkMode = false;
  isBrowser = false;
  isMobile = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.checkScreenSize();
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        this.isDarkMode = true;
        document.documentElement.classList.add('dark-theme');
      }
    }
  }

  @HostListener('window:resize')
  onResize() {
    if (this.isBrowser) {
      this.checkScreenSize();
    }
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 992;
  }

  toggleTheme() {
    if (!this.isBrowser) return;
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }

  scrollToSection(sectionId: string) {
    if (!this.isBrowser) return;
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = 80;
      const top = section.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
}
