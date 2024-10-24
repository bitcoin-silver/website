import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IntroComponent } from '../../components/ui/intro/intro.component';
import { SectionComponent } from "../../components/ui/section/section.component";

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [IntroComponent, SectionComponent],
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})

export class SolutionsComponent {
  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Solutions | Bitcoin Silver');
  }
}
