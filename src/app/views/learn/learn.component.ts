import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IntroComponent } from "../../components/ui/intro/intro.component";

@Component({
  selector: 'app-learn',
  standalone: true,
  imports: [IntroComponent],
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})

export class LearnComponent {
  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Learn | Bitcoin Silver');
  }
}
