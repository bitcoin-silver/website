import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})

export class SectionComponent {
  @Input() title: string = '';
  @Input() content: string | null = null;
  @Input() image: string | null = null;
  @Input() cinema: boolean = false;
  @Input() color: string = '--accent-color-darker';
  @Input() reverse: boolean = false;
  @Input() action: string | null = null;
}
