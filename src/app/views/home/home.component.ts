import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IntroComponent } from "../../components/ui/intro/intro.component";
import { SectionComponent } from "../../components/ui/section/section.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IntroComponent, SectionComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Blockchain built on Trust and Value | Bitcoin Silver');
  }
}
