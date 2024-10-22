import { Component, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  @Input() isMobile: boolean = false;

  language: string = 'en';
  isCompact: boolean = false;
  isMobileMenuOpen: boolean = false;
  expanded: any = null;

  switchLanguage(lang: string) {
    this.language = lang;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition > 64) {
      this.isCompact = true;
    }
    else {
      this.isCompact = false;
    }
  }
}