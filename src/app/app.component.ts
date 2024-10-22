import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  isMobile: boolean = false;
  isLoading: boolean = true;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    this.checkIfMobile();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.isLoading = false;
    }); // 1000
  }

  @HostListener('window:resize', [])
  onWindowResize() {
    this.checkIfMobile();
  }

  private checkIfMobile() {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth <= 1080;
    }
  }
}
