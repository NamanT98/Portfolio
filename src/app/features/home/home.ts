import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit, OnDestroy {
  roles: string[] = ['Software Developer', 'AI/ML Enthusiast', 'Problem Solver'];
  currentRole: string = '';
  roleIndex: number = 0;
  charIndex: number = 0;
  isDeleting: boolean = false;
  isBrowser: boolean;
  timeoutId: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.typeEffect();
    }
  }

  ngOnDestroy() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  typeEffect() {
    const currentFullRole = this.roles[this.roleIndex];
    
    if (this.isDeleting) {
      this.currentRole = currentFullRole.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      this.currentRole = currentFullRole.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    let typeSpeed = this.isDeleting ? 50 : 100;
    
    if (!this.isDeleting && this.currentRole === currentFullRole) {
      typeSpeed = 1500;
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentRole === '') {
      this.isDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      typeSpeed = 1000;
    }

    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    
    this.timeoutId = setTimeout(() => this.typeEffect(), typeSpeed);
  }
}
