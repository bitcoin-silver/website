import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})

export class IntroComponent {
  @Input() title: string = '';
  @Input() description: string | null = null;
  @Input() image: string | null = null;
  @Input() video: string | null = null;
  @Input() large: boolean = false;
}
