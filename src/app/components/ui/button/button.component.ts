import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})

export class ButtonComponent {
  @Input() title: string = '';
  @Input() color: string = '--border-color';
  @Input() link: string = '/';

  isRemote: boolean = false;

  ngOnInit(): void {
    if (this.isValidHttpUrl(this.link)) {
      this.isRemote = true;
    }
  }

  isValidHttpUrl(urlString: string): boolean {
    return /^https?:\/\//i.test(urlString);
  }
}
